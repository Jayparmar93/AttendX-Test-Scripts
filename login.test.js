
const test = require('node:test');
const assert = require('node:assert/strict');

function validateLogin(username, password) {
  return Boolean(
    username && username.trim() &&
    password && password.length >= 6
  );
}

test('Login should accept valid credentials', () => {
  assert.equal(validateLogin('student01', 'pass123'), true);
});

test('Login should reject an empty username', () => {
  assert.equal(validateLogin('', 'pass123'), false);
});

test('Login should reject a short password', () => {
  assert.equal(validateLogin('student01', '123'), false);
});
