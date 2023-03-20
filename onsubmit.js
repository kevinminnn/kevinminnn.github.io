(function() {
    emailjs.init('8UjzjNFW9hJ_Z44sh');
})();

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const formMessage = document.querySelector('#form-message');
const submitBtn = document.querySelector('#submit');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.innerHTML = '<p class="error">Please fill out all fields.</p>';

    } else {
        submitBtn.disabled = true;
        formMessage.innerHTML = '<p class="success">Sending message...</p>';

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send('service_7d7mlrt', 'template_ml1hheg', templateParams)
            .then(() => {
                submitBtn.disabled = false;
                form.reset();
                formMessage.innerHTML = '<p class="success">Message sent. Thank you!</p>';
            }
        )
    }
})