console.log('Home-work-10');
console.log("Type:", typeof 0);
console.log("Type:", typeof "text");
console.log("Type:", typeof false);
console.log("Type:", typeof (null)); //можно ли отобразить в консоли именно слово null?
console.log("Type:", typeof null);
console.log("Type:", typeof xxxxxxx);

/* let age = prompt("Your current age?");
if (age < 25) {
    alert('I am under 25 years old');
} else if (age > 25) {
    alert('I am over 25 years old');
} else if(age == 25) {
    alert("I am 25 years old");
} */

let age = prompt('Your current age?');

let message = (age < 25) ? 'I am under 25 years old' :
  (age > 25) ? 'I am over 25 years old':
  (age == 25) ? 'I am 25 years old':
  'Error!';

alert( message );