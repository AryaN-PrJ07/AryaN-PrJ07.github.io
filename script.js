// JavaScript for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function copyEmailToClipboard(email) {
    navigator.clipboard.writeText(email)
        .then(() => {
             alert('Email address copied to clipboard!');
        })
        .catch((err) => {
            console.error('Failed to copy email: ', err);
        });
}

function copyPhoneToClipboard(phone) {

    navigator.clipboard.writeText(phone)
        .then(() => {
            alert('Phone number copied to clipboard!');
        })
        .catch((err) => {
            console.error('Failed to copy phone number: ', err);
        });
}