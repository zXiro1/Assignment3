/********* contact page functionality *********/
// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element
// that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize,
// or by updating its .classList.

var submitButton = document.getElementById('submit-button');
var contactPage = document.getElementById('contact-page');

submitButton.addEventListener('click', function () {
    contactPage.innerHTML = '<p id="thank-you-message">Thank you for your message</p>';
    var thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.fontSize = '24px';
});

