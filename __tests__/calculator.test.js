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
    expect(calculator.convertMercury(30)).toEqual(125);
  });

  test('should return the age converted into Venus years', () => {
    expect(calculator.convertVenus(30)).toEqual(48);
  });

  test('should return the age converted into Mars years', () => {
    expect(calculator.convertMars(30)).toEqual(15);
  });

  test('should return the age converted into Jupiter years', () => {
    expect(calculator.convertJupiter(30)).toEqual(2);
  });

  test('should return the average life expectancy', () => {
    calculator.lifeExpectancy(0, 0, "male", "yes")
    expect(calculator.expectancy).toEqual(68);
  });

  test('should return the average life expectancy', () => {
    calculator.lifeExpectancy(25, 10, "female", "no")
    expect(calculator.expectancy).toEqual(89);
  });

  test('should return the average life expectancy in Mercury years', () => {
    calculator.lifeExpectancy(9999, 9999, "male", "yes")
    expect(calculator.mercuryLifeExpectancy()).toEqual(195);
  });

  test('should return the average life expectancy in Venus years', () => {
    calculator.lifeExpectancy(12, 7, "female", "no")
    expect(calculator.venusLifeExpectancy()).toEqual(90);
  });

  test('should return the average life expectancy in Mars years', () => {
    calculator.lifeExpectancy(8, 0, "female", "yes")
    expect(calculator.marsLifeExpectancy()).toEqual(24);
  });

  test('should return the average life expectancy in Jupiter years', () => {
    calculator.lifeExpectancy(1, 77, "male", "no")
    expect(calculator.jupiterLifeExpectancy()).toEqual(4);
  });

});