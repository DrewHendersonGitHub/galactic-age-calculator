import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    let calculator = new Calculator($('#age').val());
    if (calculator.age > 0) {
      $('#response').html("<p>Age in Mercury years: " + calculator.convertMercury() + "</p><p>Age in Venus years: " + calculator.convertVenus() + "<p>Age in Martian years: " + calculator.convertMars() + "<p>Age in Jupiter years: " + calculator.convertJupiter() + "</p>");
    }
    else {
      $('#response').html("<p>Please enter a valid age</p>");
    }
  });
});