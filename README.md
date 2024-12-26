# Password Strength Checker

This is a simple and modern JavaScript library to check the strength of a password.

## Features
- Checks if the password has at least 8 characters.
- Ensures the password contains uppercase and lowercase letters.
- Checks for numbers and special characters.

## Usage

```javascript
const checkPasswordStrength = require('password-strength-checker');

const password = "Example123!";
const result = checkPasswordStrength(password);

console.log(result.strengthMessage); // Output: "Strong"
