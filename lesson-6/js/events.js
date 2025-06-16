// Declare and initialize variables
const btn = document.querySelector('button');

// Functions
function random(number) {
    return Math.floor(Math.random()*(number + 1));
}
function bgChange() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    console.log(rndCol);
    document.body.style.backgroundColor = rndCol;
}
// Event Listeners/Handlers
// btn.onclick = bgChange;

/* STEP 1: Experiment with a variety of different events - comment out the above onclick listener and build an alternate one below - try the following - onfocus/onblur, ondblclick, onmouseover/onmouseout, window.onkeypress/onkeydown/onkeyup
*/
// btn.onmouseout = bgChange;
// window.onkeydown = bgChange;
// btn.onfocus = bgChange;

/* STEP 2: Inline event handlers - (don't use!) use with caution */
// Comment out the above event listener/handler, and add the same event as an attribute directly to the button element

/* STEP 3: Let's apply event handlers/listeners to a group of buttons - comment out the above BUTTON element, and create three new ones, A, B, and C */
const buttons = document.querySelectorAll("button");
for (let i = 1; i < buttons.length; i++) {
    // buttons[i].onclick = bgChange;
    buttons[i].addEventListener("click", bgChange); 
}
buttons[0].removeEventListener("click", bgChange);
/* STEP 4a: addEventListener() and removeEventListener()
Let's rewrite the above code with these two methods - comment out the A, B, C buttons and restore the original button - then comment out the above code */

/* STEP 4b: We can also put the entire bgChange() function inside an anonymous function, if we'd like: */
// buttons[0].addEventListener("blur", function () {
//     // bgChange();
//     document.body.style.backgroundColor = "rgb(0, 0, 0)";
// })
// buttons[0].addEventListener("dblclick", function () {
//     // bgChange();
//     document.body.style.backgroundColor = "rgb(0, 0, 0)";
// })
// buttons[0].addEventListener("mouseover", function () {
//     // bgChange();
//     document.body.style.backgroundColor = "rgb(0, 0, 0)";
// })
// buttons[0].addEventListener("mouseout", function () {
//     // bgChange();
//     document.body.style.backgroundColor = "rgb(0, 0, 0)";
// })
// const controller = new AbortController();
// buttons[0].addEventListener("mouseout", function () {
//     // bgChange();
//     document.body.style.backgroundColor = "rgb(0, 0, 0)";
// },
// {signal: controller.signal}
// );
// controller.abort();
function bgChange1(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn.addEventListener("click", bgChange1);

/* STEP 4c: We can now remove the event listener … comment out the above code in STEP 4b, and then add another event listener, then remove it (silly, yes, but try it all the same) */



// The ability to remove an event listener provides you with greater flexibility, at the cost of a bit more complexity - the choice is yours, but avoid inline JS

// Next, open up events2.html and we will learn about some other concepts specific to events and how to manage them

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
