let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


let btn = document.getElementById('btn');
let color = document.querySelector('.color');


// event listener for color changing button..
btn.addEventListener('click', function (e) {

    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

// function for random number generate....
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};