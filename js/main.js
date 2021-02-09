new Glider(document.querySelector('.testimonials'), {
    slidesToShow: 3,
    draggable: true,
});

const emailField = document.getElementById('email');
const button = document.getElementById('goBtnEmail');
const response = document.getElementById('response');

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    const email = emailField.value;
    // console.log(email);

    if (validateEmail(email)) {
        response.innerHTML = '';
        try {
            emailField.classList.remove("errorEmail");
        } catch (e) {

        }
    } else {
        emailField.classList.add("errorEmail");
        response.innerHTML = 'please insert a valid email 😩';
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}