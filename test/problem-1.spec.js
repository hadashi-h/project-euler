import { expect } from 'chai';
import { Problem1 } from '../src/problem-1.js';

describe("Problem 1 testing...", () => {

  let checker;

  beforeEach(() => {
    checker = new Problem1(3, 5, 10);
  });

  it("should pass this test", () => {
    expect(true).to.eql(true);
  });

  it("should return false, when passed a value not divided by 3 and 5", () => {
    expect(checker.isMultiplierOfLimiter(11)).to.eql(false);
  });
  it("should return true, when passed a value not divided by 3 but divided by 5", () => {
    expect(checker.isMultiplierOfLimiter(10)).to.eql(true);
  });
  it("should return true, when passed a value not divided by 5 but divided by 3", () => {
    expect(checker.isMultiplierOfLimiter(99)).to.eql(true);
  });
  it("should return true, when passed a value divided by 3 and 5", () => {
    expect(checker.isMultiplierOfLimiter(15)).to.eql(true);
  }); 

  it("should return 23, when passed a multipliers of 3 and 5 with a limiter of 10", () => {
    expect(checker.sumMultiples()).to.eql(23);
  });

});