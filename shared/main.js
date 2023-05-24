function isNumber(char) {
  return Number.isInteger(Number(char));
}

export function isValidCEP(cep) {
  const digitPattern = /^\d{8}$/;
  const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

  return digitPattern.test(cep) && !specialCharacterPattern.test(cep);
}

export function isInValidName(name) {
  const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

  return specialCharacterPattern.test(name);
}
