export default class Calculator {
  constructor(age) {
    this.age = age
  }
  
  convertMercury() {
    return Math.floor(this.age / 0.24);
  }
  
  convertVenus() {
    return Math.floor(this.age / 0.62);
  }
  
  convertMars() {
    return Math.floor(this.age / 1.88);
  }
  
  convertJupiter() {
    return Math.floor(this.age / 11.86);
  }
  
  lifeExpectancy(excersise, veggies, gender, smoker) {
    let age = 75;
    if (gender === "female") {
      age += 5;
    }
    if (smoker === 0) {
      age += 5;
    }
    else {
      age -= 2;
    }
    if (excersise < 20) {
      age += excersise * 0.25;
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
    return Math.floor(age);
  }
}