// the math in here is based off this formula:
// [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) × (1+r/n) ]
// from this website: https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php?page=2

// some calculators use a formula depending on the deposits being made at the beginning of the period, and some at the end, which results in calculators giving different answers.

// the most common result seemed to be using the formula for deposits made at the beginning of the period, so I went with that one.

export default function utils(prin, payment, timeInYears, rate) {
  // each of these has to take the years in individually, so we can calculate savings for each year leading up to the full time passing, rather than just using what is stored in state
  function amountSavedWithPrincipal(years) {
    if (rate === 0) return prin;

    return prin * Math.pow(1 + rate / 12, 12 * years);
  }

  function amountSavedWithPayments(years) {
    if (rate === 0) return payment * (years * 12);

    const total =
      payment *
      ((Math.pow(1 + rate / 12, 12 * years) - 1) / (rate / 12)) *
      (1 + rate / 12);

    return total;
  }

  function interestEarnedOnPrincipal(years) {
    return amountSavedWithPrincipal(years) - prin;
  }

  function interestEarnedOnPayments(years) {
    const months = years * 12;
    return amountSavedWithPayments(years) - payment * months;
  }

  function interestEarned(years) {
    const total =
      interestEarnedOnPrincipal(years) + interestEarnedOnPayments(years);

    return total;
  }

  function savingsWithoutInterest(years) {
    const total = savingsWithInterest(years) - interestEarned(years);

    return total;
  }

  function savingsWithInterest(years) {
    const total =
      amountSavedWithPrincipal(years) + amountSavedWithPayments(years);

    return total;
  }

  function listOfYearlySavings(calculateSavingsFunc) {
    let savings = [];
    for (let i = 0; i <= timeInYears; i++) {
      savings.push(calculateSavingsFunc(i).toFixed(2));
    }
    return savings;
  }

  function listOfYearlySavingsWithInterest() {
    return listOfYearlySavings(savingsWithInterest);
  }

  function listOfYearlySavingsWithoutInterest() {
    return listOfYearlySavings(savingsWithoutInterest);
  }

  return {
    listOfYearlySavings, // for testing
    listOfYearlySavingsWithInterest,
    listOfYearlySavingsWithoutInterest,
    savingsWithInterest,
    interestEarned
  };
}
