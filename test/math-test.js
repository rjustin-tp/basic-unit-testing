const { describe, it } = require('mocha');
const { expect } = require('chai');
const { addNumbers, factorial } = require('../math');

describe('addNumbers function', () => {
  it('should return the sum of two numbers correctly', () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;

    // Act
    const answer = addNumbers(num1, num2);

    // Assert
    expect(answer).to.equal(5);
  });
});

describe('factorial function', () => {
  it('should return the factorial number correctly', () => {
    // Arrange
    const num = 5;

    // Act
    const answer = factorial(num);

    // Assert
    // Will Fail. Can you fix the issue?
    expect(answer).to.equal(120);
  });
});
