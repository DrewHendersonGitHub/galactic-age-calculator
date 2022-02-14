export default class Calculator {
  constructor(age) {
    this.age = age;
    this.expectancy = 0;
  }
  
  convertMercury(age) {
    return Math.floor(age / 0.24);
  }
  
  convertVenus(age) {
    return Math.floor(age / 0.62);
  }
  
  convertMars(age) {
    return Math.floor(age / 1.88);
  }
  
  convertJupiter(age) {
    return Math.floor(age / 11.86);
  }
  
  lifeExpectancy(exercise, veggies, gender, smoker) {
    let age = 70;
    if (exercise < 20) {
      age += exercise * 0.25;
    }
    else {
      age += 5;
    }
    if (veggies <= 7) {
      age += veggies * 0.5;
    }
    else {
      age += 4;
    }
    if (gender === "female") {
      age += 5;
    }
    if (smoker === "no") {
      age += 5;
    }
    else {
      age -= 2;
    }
    this.expectancy = Math.floor(age);
  }

  mercuryLifeExpectancy() {
    return Math.abs(this.convertMercury(this.age) - this.convertMercury(this.expectancy));
  }

  venusLifeExpectancy() {
    return Math.abs(this.convertVenus(this.age) - this.convertVenus(this.expectancy));
  }

  marsLifeExpectancy() {
    return Math.abs(this.convertMars(this.age) - this.convertMars(this.expectancy));
  }

  jupiterLifeExpectancy() {
    return Math.abs(this.convertJupiter(this.age) - this.convertJupiter(this.expectancy));
  }
}