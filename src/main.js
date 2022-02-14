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
      $('#calculator-response').html("<hr><p>Age in Mercury years: " + calculator.convertMercury(calculator.age) + "</p><p>Age in Venus years: " + calculator.convertVenus(calculator.age) + "<p>Age in Martian years: " + calculator.convertMars(calculator.age) + "<p>Age in Jupiter years: " + calculator.convertJupiter(calculator.age) + "</p><button id='calculator-response-ask'>Calculate life expectancy?</button>");
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
    calculator.lifeExpectancy($('#exercise').val(), $('#veggies').val(), $('#gender').val(), $('#smoker').val());
    $('#life-expectancy-response').html("<hr><p>Your life expectancy is " + calculator.expectancy + " Earth years.</p>");
    if (calculator.expectancy < calculator.age) {
      $('#life-expectancy-response').append("<p>You have lived " + (calculator.age - calculator.expectancy) + " Earth years over your calculated lifetime length,</p><p>or " + calculator.mercuryLifeExpectancy() + " Mercury years,</p><p>or " + calculator.venusLifeExpectancy() + " Venus years,</p><p>or " + calculator.marsLifeExpectancy() + " Mars years,</p><p>or " + calculator.jupiterLifeExpectancy() + " Jupiter years over.</p>");
    }
    else {
      $('#life-expectancy-response').append("<p>You will live for around " + (calculator.expectancy - calculator.age) + " more Earth years,</p><p>" + calculator.mercuryLifeExpectancy() + " more Mercury years,</p><p>" + calculator.venusLifeExpectancy() + " more Venus years,</p><p>" + calculator.marsLifeExpectancy() + " more Mars years,</p><p>" + calculator.jupiterLifeExpectancy() + " or more Jupiter years.</p>");
    }
    $('#life-expectancy-form').hide();
    $('#life-expectancy-response').show();
  });
});