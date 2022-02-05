import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator(30);
  });

  test('should make a calculator object that holds an age', () => {
    expect(calculator.age).toEqual(30);
  });

  test('should return the age converted into Mercury years', () => {
    expect(calculator.convertMercury()).toEqual(125);
  });

  test('should return the age converted into Venus years', () => {
    expect(calculator.convertVenus()).toEqual(48);
  });

  test('should return the age converted into Mars years', () => {
    expect(calculator.convertMars()).toEqual(15);
  });

  test('should return the age converted into Jupiter years', () => {
    expect(calculator.convertJupiter()).toEqual(2);
  });

  test('should return the average life expectancy', () => {
    expect(calculator.lifeExpectancy(0, 0, "male", 1)).toEqual(68);
  });

  test('should return the average life expectancy', () => {
    expect(calculator.lifeExpectancy(25, 10, "female", 0)).toEqual(89);
  });

});