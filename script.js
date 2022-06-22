var operation = window.prompt('Which operation would you lika to perform \n ( +, -, *, / )')

var num1 = window.prompt('Enter first number: ')
var num2 = window.prompt('Enter second number: ')

num1 = parseFloat(num1)
num2 = parseFloat(num2)

if (operation == '+') {
    window.alert(num1 + num2);
}else if (operation == '-') {
    window.alert(num1 - num2);
}else if (operation == '*') {
    window.alert(num1 * num2);
}else if (operation == '/') {
    window.alert(num1 / num2);
}else {
    window.alert('Someting went wrong, please refresh the page.')
}