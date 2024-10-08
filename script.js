const myButton = document.getElementById('myButton');
const increment = document.getElementById('increment');

myButton.addEventListener('click', function() {
   increment.innerHTML++;
})