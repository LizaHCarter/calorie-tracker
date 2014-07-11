var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var weight = prompt('How much do you weigh in pounds?: ');
weight = parseInt(weight);
var gender = prompt('Enter your gender (m/f): ');

var food = [];
var cal = [];

var option = prompt('Would you like to track (f)ood or (q)uit? ');

while(option === 'f'){
  var Food = prompt('Enter food: ');
  food.push(Food);
  var Cal = prompt('Enter calories: ');
  Cal = parseInt(Cal);
  cal.push(Cal);
  option = prompt('Enter more (f)ood or (q)uit? ')
}

if(option === 'q'){
  console.log('You entered the following foods: '+food+'.');
  var total = 0;
  for (var a = 0; a < cal.length; a++){
    total+=cal[a];
  }

  console.log('Your calorie total is '+total+'calories.');
  if(gender === 'm'&& total >=4000){
    var gain = total / 4000;
      gain = parseInt(gain);
  }else if(gender === 'f'&& total >= 3000){
    var gain = total / 3000;
      gain = parseInt(gain);
  }else{
      gain = 0;
  }

  console.log('Your weight gain is: '+gain+'lbs.');
  console.log('Your new weight will be '+(weight + gain)+'lbs.');

}
