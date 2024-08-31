const header = document.getElementById('header');
const results = document.getElementById('results');
const resultMessage = document.getElementById('results-message');
const ratingForm = document.getElementById('rating-form');
const radioButtons = document.querySelectorAll('input[name="rating"]');

ratingForm.addEventListener('submit', e => {
    e.preventDefault();

    let rating;

    for (const radio of radioButtons) {
        if (radio.checked) {
            rating = radio.value;

            ratingForm.style.display = "none";
            header.style.display = "none";
            results.style.display = "grid";
            resultMessage.innerText = `You selected ${rating} out of 5`
        }
    }
})