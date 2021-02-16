let count = 0;
let value = document.getElementById("value");
let btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    let Id = btn.id;

    btn.addEventListener('click', function (e) {
        if (Id.includes('decrease')) {
            count--;
        } else if (Id.includes('reset')) {
            count = 0;
        } else {
            count++
        }
        value.textContent = count;
    });
});