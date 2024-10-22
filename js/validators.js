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
  const passwordRegex = /^(?=.*[a-z])(?=.*[!@#$%^-_&*])(?=.{6,})/;
  return passwordRegex.test(password);
};

/**
 * Check Name Format
 * @param {string} username
 * @returns
 */
const usernameValidator = (username) => {
  const nameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.{3,})/;
  return nameRegex.test(username);
};

export { emailValidator, passwordValidator, usernameValidator };
