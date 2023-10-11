let miles;
let gallons;
let mpg;
let again;

do {
  do {
    miles = parseFloat(prompt('Enter miles driven'));
  } while (isNaN(miles) || miles <= 0);

  do {
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
  } while (isNaN(gallons) || gallons <= 0);

  mpg = miles / gallons;
  console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);

  do {
    again = prompt('Run the application again? (y or n)', 'y').toLowerCase();
} while (again !== 'y' && again !== 'n');
} while (again === 'y');

console.log('Application has exited.');
