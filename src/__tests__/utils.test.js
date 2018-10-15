import utils from "../utils";
import jest from "jest-mock";

describe("utility functions", () => {
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

  describe("savingsWithInterest", () => {
    it("correctly calculates savings with interest", () => {
      const { savingsWithInterest } = utils(principal, payment, years, rate);
      expect(savingsWithInterest(5)).toBeCloseTo(13786.22, 2);
    });
  });

  describe("interestEarned", () => {
    it("correctly calculates total interest earned", () => {
      const { interestEarned } = utils(principal, payment, years, rate);
      expect(interestEarned(years)).toBeCloseTo(1686.22, 2);
    });
  });

  describe("listOfYearlySavings", () => {
    it("calls provided callback function", () => {
      const { listOfYearlySavings } = utils(principal, payment, years, rate);

      const callback = jest.fn(x => 1);
      listOfYearlySavings(callback);

      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledTimes(6);
    });
    it("returns a list of values, each calculated with a callback function", () => {
      const { listOfYearlySavings } = utils(principal, payment, years, rate);

      const callback = jest.fn(x => 1 + x);
      const list = listOfYearlySavings(callback);

      expect(list).toEqual(["1.00", "2.00", "3.00", "4.00", "5.00", "6.00"]);
    });
  });
});
