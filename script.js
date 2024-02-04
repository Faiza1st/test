function handleResponse() {
    var response = document.querySelector('input[name="response"]:checked');
    var reconsiderMessage = document.getElementById('reconsider-message');
    var catImage = document.getElementById('cat-image');

    if (response) {
        if (response.value === 'yes') {
            celebrate();
            alert('Yay! I\'m so happy! Can\'t wait for our special day together. ❤️');
            catImage.style.display = 'none'; // Hide the image if the user selects "Yes"
        } else {
            reconsiderMessage.innerHTML = 'Are you sure? PLEASE PLEASE PLEASE BE MY VALENTINE';
            reconsiderMessage.style.display = 'block';
            catImage.style.display = 'block'; // Display the image if the user selects "No"
        }
    } else {
        alert('Please select Yes or No.');
    }
}

function celebrate() {
    var fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    document.body.appendChild(fireworks);

    setTimeout(function () {
        document.body.removeChild(fireworks);
    }, 5000); // Adjust the duration of the fireworks
}