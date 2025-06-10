const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}

hello("Ryo");
hello();

const firstName = document.getElementById('name');

// function logkey(event) {
//     console.log(`You pressed "${event.key}".`);
// }
// firstName.addEventListener("keydown", logkey);

// firstName.addEventListener("keydown", function (event) {
//     console.log(`You pressed "${event.key}".`);
// });

// firstName.addEventListener("keydown", (event) => {
//     console.log(`You pressed "${event.key}".`);
// });

// firstName.addEventListener("keydown", event => {
//     console.log(`You pressed "${event.key}".`);
// });

const output = document.querySelector('#output');

firstName.addEventListener("keydown", event => {
    output.textContent = `You pressed "${event.key}".`;
});


const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled);

const x = 1;

// function a() {
// const y = 2;
// }

// function b() {
// const z = 3;
// }

function outputRe(value) {
const para = document.createElement('p');
document.body.appendChild(para);
para.textContent = `Value: ${value}`;
}

outputRe(z);

function a() {
  const y = 2;
  outputRe(x);
}

function b() {
  const z = 3;
  outputRe(x);
}

a();
b();