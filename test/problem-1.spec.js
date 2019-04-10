import { expect } from 'chai';
import { Problem1 } from '../src/problem-1.js';
 
describe("Problem 1 testing...", () => {
 
  let checker;
 
  beforeEach(() => {
    checker = new Problem1();
  });
 
  it("should pass this test", () =>{
    expect(true).to.eql(true)
  }) 
})