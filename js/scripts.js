const form = document.querySelector('contact-form');

form.addEventListener('btn-submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('name').value;
    const email = form.querySelector('email').value;
    const message = form.querySelector('message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } 
    
    alert('Your message has been sent');
    form.reset();
    
}
);