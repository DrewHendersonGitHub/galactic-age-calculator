import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  //let age = 0;
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    let calculator = new Calculator($('#age').val());
    //age = $('#age').val();
    if (calculator.age > 0) {
      $('#calculator-response').html("<hr><p>Age in Mercury years: " + calculator.convertMercury() + "</p><p>Age in Venus years: " + calculator.convertVenus() + "<p>Age in Martian years: " + calculator.convertMars() + "<p>Age in Jupiter years: " + calculator.convertJupiter() + "</p>");
      $('#life-expectancy-form').show();
    }
    else {
      $('#calculator-response').html("<p>Please enter a valid age</p><hr>");
      $('#life-expectancy-form').hide();
    }
  });
  
  $('#life-expectancy-form').submit(function(event) {
    event.preventDefault();
    let calculator = new Calculator($('#age').val());
    if (calculator.age > 0) {
      $('#life-expectancy-response').html("<hr><p>Your life expectancy: " + calculator.lifeExpectancy() + "</p>");
      $('#life-expectancy-form').hide();
      $('#life-expectancy-response').show();
    }
    else {
      $('#response').html("<p>Please enter a valid age</p>");
    }
  });
});