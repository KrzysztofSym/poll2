const button = document.querySelector('.btn:first-of-type');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

inputs.forEach(input => {
    input.addEventListener('change', validateForm);
});

button.addEventListener('click', ()=> {
    console.log('test');
})

function validateForm() {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                button.disabled = false;
                return false; 
            }
        }
        button.disabled = true;
        return true; 
    }
    
button.addEventListener('click', function (event) {
    event.preventDefault();
    alert("Thank you for your feedback");
    console.log("submitted");
})
