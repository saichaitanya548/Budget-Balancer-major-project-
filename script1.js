// script1.js
function sendResetLink() {
    const email = document.getElementById('email').value;
    // Implement logic to generate a reset code (e.g., random alphanumeric string)
    const resetCode = generateResetCode(); // You can create a function for this

    // Send the reset code to the provided email address (e.g., via API call or server-side handling)
    sendCodeToEmail(email, resetCode); // You need to implement this function

    alert(`Reset code sent to ${email}. Check your email.`);
}

// Example function to generate a random reset code
function generateResetCode() {
    // Implement your logic here (generate a random alphanumeric string)
    // For simplicity, let's assume the reset code is a 6-digit number
    return Math.floor(Math.random() * 900000) + 100000;
}

// Example function to send the reset code to the email address
function sendCodeToEmail(email, code) {
    // Implement your logic here (e.g., use an email service or server-side handling)
    // You can use libraries like Nodemailer for Node.js or similar tools
    // to send an email containing the reset code.
}
