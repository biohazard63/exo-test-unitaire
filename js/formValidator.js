function validateForm(username, password, email) {
  const usernameValid = username.length >= 3;
  const passwordValid = password.length >= 8;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return {
    usernameValid,
    passwordValid,
    emailValid,
    isValid: usernameValid && passwordValid && emailValid,
  };
}

module.exports = { validateForm };
