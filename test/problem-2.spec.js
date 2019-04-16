import { expect } from 'chai';
import { Problem2 } from '../src/problem-2.js';

describe("Problem 2 testing...", () => {

  let checker;

  beforeEach(() => {
    checker = new Problem2();
  });

  it("should pass this test", () => {
    expect(true).to.eql(true);
  });
});