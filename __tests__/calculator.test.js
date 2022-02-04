import Calculator from './../src/calculator.js';

describe('Calculator', () => {

  test('should make a calculator object that holds an age', () => {
    const calculator = new Calculator(30);
    expect(calculator.age).toEqual(30);
  });

  test('should return the age converted into Mercury years', () => {
    const calculator = new Calculator(30);
    expect(calculator.convertMercury()).toEqual(125);
  });

});