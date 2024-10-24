/**
 * Check Email
 * @param {string} email
 * @returns
 */
const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
  return emailRegex.test(email);
};

/**
 * Check Password Format
 * @param {string} password
 * @returns
 */
const passwordValidator = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[!@#$%^-_&*])(?=.*[1-9])(?=.{6,})/;
  return passwordRegex.test(password);
};

/**
 * Check confirmation password
 * @param {string} password
 * @param {string} confirmPassword
 * @returns
 */

/**
 * Check Name Format
 * @param {string} username
 * @returns
 */
const usernameValidator = (username) => {
  const nameRegex = /^(?=.*[a-z])(?=.{3,})/;
  return nameRegex.test(username);
};

export { emailValidator, passwordValidator, usernameValidator };
