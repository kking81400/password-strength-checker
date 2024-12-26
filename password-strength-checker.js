// password-strength-checker.js
 
function checkPasswordStrength(password) {
    const lengthCriteria = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const strength = {
        length: lengthCriteria,
        upperCase: hasUpperCase,
        lowerCase: hasLowerCase,
        numbers: hasNumbers,
        specialChars: hasSpecialChars
    };

    const strengthLevel = Object.values(strength).filter(Boolean).length;

    let strengthMessage = '';
    switch (strengthLevel) {
        case 0:
        case 1:
            strengthMessage = 'Very Weak';
            break;
        case 2:
            strengthMessage = 'Weak';
            break;
        case 3:
            strengthMessage = 'Medium';
            break;
        case 4:
            strengthMessage = 'Strong';
            break;
        case 5:
            strengthMessage = 'Very Strong';
            break;
        default:
            strengthMessage = 'Unknown';
    }

    return {
        strengthLevel: strengthLevel,
        strengthMessage: strengthMessage,
        details: strength
    };
}
module.exports = checkPasswordStrength;
