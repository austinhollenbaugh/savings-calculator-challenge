import Main from "../components/Main";
const {
  amountSavedWithPayments,
  amountSavedWithPrincipal,
  listOfYearlySavings,
  savingsWithInterest,
  savingsWithoutInterest
} = Main.prototype;

describe("Main component", () => {
  let fakeInputs;
  let years;
  let rate;
  let principal;
  let payment;
  beforeEach(() => {
    fakeInputs = [100, 200, 5, 0.05];
    principal = fakeInputs[0];
    payment = fakeInputs[1];
    years = fakeInputs[2];
    rate = fakeInputs[3];
  });

  it("correctly calculates amount saved with monthly payments and no principal", () => {
    expect(amountSavedWithPayments(years, rate, payment)).toEqual(
      13601.216568168675
    );
    // i'm also getting a 13657 amount?
    // some sites are doing an effective rate of 5.12% instead?
    // https://financialmentor.com/calculator/compound-interest-calculator
  });

  it("correctly calculates amount saved with principal and no monthly payments", () => {
    expect(amountSavedWithPrincipal(years, rate, principal)).toEqual(
      128.3358678503514
    );
  });

  it("returns a list of values, each calculated with a callback function", () => {
    const list = listOfYearlySavings(years, jest.fn(x => 1 + x));
    expect(list).toEqual(["1.00", "2.00", "3.00", "4.00", "5.00", "6.00"]);
  });
  // most important things to test here, imo:
  // all the different math. make sure each of the different parts of that are correct
  // make sure the right stuff is being passed to the right components
});
