/**
 * Checks if a password meets the specified requirements.
 * 
 * @param {string} password - The password to be checked.
 * @throws {Error} If the password is not a string, is less than 8 characters long,
 *                 is more than 20 characters long, does not contain at least one
 *                 uppercase letter, one lowercase letter, one number, or one special character.
 * @returns {boolean} Returns true if the password meets all the requirements.
 */
export function checkPassword(password) {
    if (typeof password !== 'string') {
        throw new Error('Password must be a string');
    }
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }
    if (password.length > 20) {
        throw new Error('Password must be at most 20 characters long');
    }
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if ('!@#$%^&*()_+'.includes(char)) {
            hasSpecialChar = true;
        }
    }
    
    if (!hasUppercase) {
        throw new Error('Password must contain at least one uppercase letter');
    }
    if (!hasLowercase) {
        throw new Error('Password must contain at least one lowercase letter');
    }
    if (!hasNumber) {
        throw new Error('Password must contain at least one number');
    }
    if (!hasSpecialChar) {
        throw new Error('Password must contain at least one special character');
    }
    
    return true;
}