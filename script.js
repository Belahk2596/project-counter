const myButton = document.getElementById('myButton'); //pulling button into js
const incrementElmnt = document.getElementById('increment'); //to use for 
const clickedOnce = document.getElementById('oneClick');
myButton.addEventListener('click', function() {
    let increment = parseInt(incrementElmnt.innerHTML);
   increment++;
   incrementElmnt.innerHTML = increment; //increments the contents of the element in html
    if (increment === 1) {
        clickedOnce.innerHTML = "time" //correcting the grammar used if only clicked once
    } else {
        clickedOnce.innerHTML = "times"
    }
})
