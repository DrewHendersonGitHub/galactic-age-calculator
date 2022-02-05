import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './calculator.js';

$(document).ready(function() {
  let calculator;
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    calculator = new Calculator($('#age').val());
    if (calculator.age > 0) {
      $('#calculator-response').html("<hr><p>Age in Mercury years: " + calculator.convertMercury() + "</p><p>Age in Venus years: " + calculator.convertVenus() + "<p>Age in Martian years: " + calculator.convertMars() + "<p>Age in Jupiter years: " + calculator.convertJupiter() + "</p><button id='calculator-response-ask'>Calculate life expectancy?</button>");
      $("#calculator-response-ask").on("click", function() {
        $('#life-expectancy-form').show();
        $('#calculator-response-ask').hide();
      });
    }
    else {
      $('#calculator-response').html("<p>Please enter a valid age</p><hr>");
      $('#life-expectancy-form').hide();
    }
  });
  
  $('#life-expectancy-form').submit(function(event) {
    event.preventDefault();
    let expectancy = calculator.lifeExpectancy($('#exercise').val(), $('#veggies').val(), $('#gender').val(), $('#smoker').val());
    $('#life-expectancy-response').html("<hr><p>Your life expectancy is " + expectancy + " Earth years.</p>");
    if (expectancy < calculator.age) {
      $('#life-expectancy-response').append("<p>You have lived " + (calculator.age - expectancy) + " years over your calculated lifetime length.</p>");
    }
    $('#life-expectancy-form').hide();
    $('#life-expectancy-response').show();
  });
});