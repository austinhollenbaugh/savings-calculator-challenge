import Main from "../components/Main";

describe("Main component", () => {
  it("instantiates state with an array of zeros", () => {
    // expect(Main.prototype.constructor())
  });

  it("calculates total saved on change", () => {
    const arr = [1, 2, 3]
    expect(Main.prototype.totalSaved(arr)).toBe(1000);
  })

  it("calculates interest earned on change", () => {
    const arr = [1, 2, 3]
    expect(Main.prototype.interestEarned(arr)).toBe(500);
  })

  describe("handleChange", () => {
    it("updates inputValues array with correct changes", () => {
      //
    });

    it("does not mutate state data", () => {
      //
    })
  })

  // could also check and make sure the right stuff is being passed down to Sidebar, Graph, and totals
})
