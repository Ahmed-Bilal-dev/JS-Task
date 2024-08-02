// function login() {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let emailLocal = localStorage.getItem('email');
//     let passwordLocal = localStorage.getItem('password');

//     if (email === emailLocal && password === passwordLocal) {
//         window.location.href = 'welcomepage.html';
//     } else {
//         alert('Details not found in our database. Please first make an account then login');
//     }
// }




// function signup() {
//     let name = document.getElementById("name").value;
//     let signupEmail = document.getElementById("email").value;
//     let signupPassword = document.getElementById("password").value;

//     localStorage.setItem('name', name);
//     localStorage.setItem('email', signupEmail);
//     localStorage.setItem('password', signupPassword);

//     window.location.href = 'login.html';
// }


// Function to handle login
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Retrieve stored credentials from localStorage
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let user = storedUsers.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));

        if (user.role === 'admin') {
            window.location.href = 'admin_dashboard.html';
        } else {
            window.location.href = 'dashboard.html';
        }
    } else {
        alert('Invalid email or password');
    }

    return false; // Prevent default form submission
}

// Function to handle signup
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let fileInput = document.getElementById("file");
    let file = fileInput.files[0];
    let reader = new FileReader();

    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Check if email already exists
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let existingUser = storedUsers.find(user => user.email === email);

    if (existingUser) {
        alert("An account with this email already exists. Please login.");
        return false;
    }

    // Handle profile picture upload
    reader.onloadend = function() {
        let profilePic = reader.result;
        let newUser = {
            name,
            email,
            password,
            profilePic,
            role: 'user'
        };

        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        alert("Signup successful! Please login.");
        window.location.href = 'login.html';
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        // If no profile picture is uploaded
        let newUser = {
            name,
            email,
            password,
            role: 'user'
        };

        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        alert("Signup successful! Please login.");
        window.location.href = 'login.html';
    }

    return false; // Prevent default form submission
}

// Function to check if the user is logged in and redirect if necessary
function checkAuth() {
    let loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            if (currentUser.role === 'admin') {
                window.location.href = 'admin_dashboard.html';
            } else {
                window.location.href = 'dashboard.html';
            }
        }
    }
}

// Call checkAuth on pages where user should be authenticated
document.addEventListener('DOMContentLoaded', function() {
    // Call checkAuth on pages that require authentication
    if (document.getElementById('signupForm')) {
        checkAuth(); // Redirect logged-in users from the signup page
    }
});




