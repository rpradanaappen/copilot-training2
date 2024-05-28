/**
 * Checks if a password meets the specified requirements.
 *
 * @param {string} password - The password to be checked.
 * @returns {boolean} - Returns true if the password meets the requirements, otherwise throws an error.
 * @throws {Error} - Throws an error if the password is not a string, or if it doesn't meet the length and character requirements.
 */
export function checkPassword(password) {
    if (typeof password !== 'string') {
        throw new Error('Password should be a string');
    }
    if (password.length < 8) {
        throw new Error('Password should be at least 8 characters long');
    }
    if (password.length > 20) {
        throw new Error('Password should be at most 20 characters long');
    }
    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
    let hasSpecialChar = false;
    
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        
        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else {
            hasSpecialChar = true;
        }
        
        if (hasLowercase && hasUppercase && hasDigit && hasSpecialChar) {
            return true;
        }
    }

    // test pull request
    
    throw new Error('Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character');
}
