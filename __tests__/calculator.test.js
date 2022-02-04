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

  test('should return the age converted into Venus years', () => {
    const calculator = new Calculator(30);
    expect(calculator.convertVenus()).toEqual(48);
  });

  test('should return the age converted into Mars years', () => {
    const calculator = new Calculator(30);
    expect(calculator.convertMars()).toEqual(15);
  });

});