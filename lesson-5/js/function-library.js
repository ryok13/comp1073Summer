const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
    return num * num;
} 

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x>1) {
        num *= x;
        x--;
    }
    return num;
}

// x = 5 - 1 > 4 -> num = 5* 4 -> num = 5 * 4 * 3 -> num = 5 * 4 * 3 * 2

input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = "You need to enter a number!";
    } else {
        para.innerHTML = `${num} squared is ${squared(num)}.<br>`;
        para.innerHTML += `${num} cubed is ${cubed(num)}.<br>`;
        para.innerHTML += `${num} factorial is ${factorial(num)}.`;
    }
})
