
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

    event.preventDefault();

    const {elements: { email, password }} = event.target;

    if(email.value === '' || password.value === '') {
        alert('All fields must be filled in!');
    } else {
        console.log({[email.name]:email.value, [password.name]:password.value});
    }
    
    event.target.reset();
}