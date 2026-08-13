
const states = [
    document.getElementById("state1"),
    document.getElementById("state2"),
    document.getElementById("state3")
];

const nextButton = document.getElementById("Next");
const previousButton = document.getElementById("Previous");

let current = 0;

function showCurrentState() {
    for (let i = 0; i < states.length; i++) {
        if (i === current) {
            states[i].style.display = "block";
        } else {
            states[i].style.display = "none";
        }
    }
}

nextButton.addEventListener("click", function () {
    current = current + 1;

    if (current > states.length - 1) {
        current = 2;
    }

    showCurrentState();
});

previousButton.addEventListener("click", function () {
    current = current - 1;

    if (current < 0) {
        current = 0;
    }

    showCurrentState();
});

showCurrentState();
