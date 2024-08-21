// Simulated "database"
const users = [];

document.addEventListener("DOMContentLoaded", function () {
    // Show registration form
    document.getElementById('show-register').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('register-form').classList.add('active');
        clearMessages();
    });

    // Show login form
    document.getElementById('show-login').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('register-form').classList.remove('active');
        document.getElementById('login-form').classList.add('active');
        clearMessages();
    });

    // Register user
    document.getElementById('register-btn').addEventListener('click', function () {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const passwordConfirm = document.getElementById('register-password-confirm').value;

        // Validation
        if (username === '' || password === '' || passwordConfirm === '') {
            displayMessage('register-error', 'Please fill in all fields');
            return;
        }

        if (password !== passwordConfirm) {
            displayMessage('register-error', 'Passwords do not match');
            return;
        }

        if (users.some(user => user.username === username)) {
            displayMessage('register-error', 'Username already exists');
            return;
        }

        // Save new user
        users.push({ username, password });
        displayMessage('login-error', 'Registration successful! You can now log in.', 'success');
        document.getElementById('show-login').click();
    });

    // Login user
    document.getElementById('login-btn').addEventListener('click', function () {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            displayMessage('login-error', 'Invalid username or password');
            return;
        }

        // Simulate successful login
        alert('Login successful!');
        clearMessages();
    });
});

// Display error or success message
function displayMessage(elementId, message, type = 'error') {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.color = type === 'error' ? 'red' : 'green';
}

// Clear messages
function clearMessages() {
    document.getElementById('login-error').textContent = '';
    document.getElementById('register-error').textContent = '';
}
// Login user
document.getElementById('login-btn').addEventListener('click', function () {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        displayMessage('login-error', 'Invalid username or password');
        return;
    }

    // Simulate successful login
    window.location.href = 'index.html'; // Redirect to index.html
});
