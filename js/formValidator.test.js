const { validateForm } = require('./formValidator'); // Assurez-vous que le chemin vers le fichier de validation est correct.

describe('validateForm', () => {
  test('should return false for a username shorter than 3 characters', () => {
    const result = validateForm('ab', 'password123', 'test@example.com');
    expect(result.usernameValid).toBe(false);
    expect(result.isValid).toBe(false);
  });

  test('should return false for a password shorter than 8 characters', () => {
    const result = validateForm('username', 'pass', 'test@example.com');
    expect(result.passwordValid).toBe(false);
    expect(result.isValid).toBe(false);
  });

  test('should return false for an invalid email', () => {
    const result = validateForm('username', 'password123', 'invalid-email');
    expect(result.emailValid).toBe(false);
    expect(result.isValid).toBe(false);
  });

  test('should return true for valid username, password, and email', () => {
    const result = validateForm('username', 'password123', 'test@example.com');
    expect(result.usernameValid).toBe(true);
    expect(result.passwordValid).toBe(true);
    expect(result.emailValid).toBe(true);
    expect(result.isValid).toBe(true);
  });
});
