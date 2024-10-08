const myButton = document.getElementById("myButton"); //pulling button into js
const incrementElmnt = document.getElementById("increment");
const clickedOnce = document.getElementById("oneClick");
myButton.addEventListener("click", function () {
  let increment = parseInt(incrementElmnt.innerHTML); //the value of the inner text
  increment++; //increments counter
  incrementElmnt.innerHTML = increment; //prints updated click amount
  if (increment === 1) {
    clickedOnce.innerHTML = "time"; //correcting the grammar used if only clicked once
  } else {
    clickedOnce.innerHTML = "times";
  }
});
