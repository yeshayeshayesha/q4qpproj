function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to validate the contact number
    function validateContactNumber(number) {
        const regex = /^\d+$/; // Regular expression to check if the number contains only digits
        return regex.test(number);
    }

    // Function to store form data in localStorage
    function storeFormData() {
        var fname = document.getElementById('firstName').value;
        var lname = document.getElementById('lastName').value;
        var reasons = document.getElementById('reasons').value;
        var gmail = document.getElementById('email').value;
        var number = document.getElementById('contactNum').value;
        var pword = document.getElementById('passWord').value;
        
        // Validate the contact number
        if (!validateContactNumber(number)) {
            alert("Please enter a valid contact number.");
            return; // Exit the function if the contact number is not valid
        }

        // Get the selected gender value
        var genderOptions = document.getElementsByName('gender');
        let selectedGender;
        for (const option of genderOptions) {
            if (option.checked) {
                selectedGender = option.value;
                break;
            }
        }

        // Store all values in localStorage
        localStorage.setItem('firstName', fname);
        localStorage.setItem('lastName', lname);
        localStorage.setItem('reasons', reasons);
        localStorage.setItem('email', gmail);
        localStorage.setItem('contactNum', number);
        localStorage.setItem('passWord', pword);
        if (selectedGender) {
            localStorage.setItem('gender', selectedGender);
        }

        window.location.href = 'home.html'; 
    }

    // Adding event listener to the form submit
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            storeFormData();
        });
    }

    // Retrieve and display stored data on profile page
    var welcomeMessage = document.getElementById('welcomeMessage');
    var StoredReasons = document.getElementById('StoredReasons');
    var StoredEmail = document.getElementById('StoredEmail');
    var StoredContact = document.getElementById('StoredContact');
    var StoredGender = document.getElementById('StoredGender');
    var StoredPassword = document.getElementById('StoredPassword');

    if (welcomeMessage) {
        var fname = localStorage.getItem('firstName');
        var lname = localStorage.getItem('lastName');
        var reasons = localStorage.getItem('reasons');
        var gmail = localStorage.getItem('email');
        var number = localStorage.getItem('contactNum');
        var gender = localStorage.getItem('gender');
        var pword = localStorage.getItem('passWord');

        if (fname && lname && reasons && gmail && number && gender) {
            welcomeMessage.innerHTML = fname + ' ' + lname;
            StoredReasons.innerHTML = reasons;
            StoredEmail.innerHTML = gmail;
            StoredContact.innerHTML = number;
            StoredGender.innerHTML = gender;
            StoredPassword.innerHTML = pword;
        } else {
            welcomeMessage.innerHTML = 'No user data found.';
        }
    }

    // Adding event listeners to gender radio buttons to store gender on change
    const genderOptions = document.getElementsByName('gender');
    for (const option of genderOptions) {
        option.addEventListener('change', function() {
            let selectedGender = this.value;
            localStorage.setItem('gender', selectedGender);
        });
    }

    // Retrieve and set the stored gender value on page load
    const storedGender = localStorage.getItem('gender');
    if (storedGender) {
        for (const option of genderOptions) {
            if (option.value === storedGender) {
                option.checked = true;
                break;
            }
        }
    }
});


function redirectProfile(){
    window.location.href = 'profile.html';
}