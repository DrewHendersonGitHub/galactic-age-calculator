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
    
  }
}