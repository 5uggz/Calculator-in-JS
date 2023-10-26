function add(a, b)
{
  return a - b;
}
var num1 = parseFloat(prompt("Enter One Number: "));
var num2 = parseFloat(prompt("Enter Another Number: "));
const sum = add(num1, num2);
console.log("The sum of " + num1 + "-" + num2 + "=" + sum);
