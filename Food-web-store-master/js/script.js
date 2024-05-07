let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active')
    }else{
        document.querySelector('#scroll-top').classList.remove('active')

    }
}

function loader(){
    document.querySelector('.loading-container').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader,2000);
}
window.onload = fadeOut();

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // You can add validation logic here if needed
    const name = document.querySelector('#orderForm input[type="text"][placeholder="name"]').value;
    const email = document.querySelector('#orderForm input[type="email"]').value;
    const number = document.querySelector('#orderForm input[type="number"]').value;
    const foodName = document.querySelector('#orderForm input[type="text"][placeholder="food name"]').value;
    const address = document.querySelector('#orderForm textarea').value;

    // Check if all fields are filled (simple validation)
    if (name && email && number && foodName && address) {
        // Display a success message
        alert('Your order has been placed successfully!');

        // Optionally, clear the form fields
        document.querySelectorAll('#orderForm input, #orderForm textarea').forEach(input => input.value = '');
    } else {
        // Alert the user that all fields are required
        alert('Please fill in all fields.');
    }
});

