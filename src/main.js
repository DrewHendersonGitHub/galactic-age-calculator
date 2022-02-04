import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    let calculator = new Calculator($('#age').val());
    $('#response').append("<p>" + calculator.convertMercury() + "</p>" + "<p>" + calculator.convertVenus() + "</p>" + "<p>" + calculator.convertMars() + "</p>" + "<p>" + calculator.convertJupiter() + "</p>");
  });
});