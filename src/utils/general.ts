import {EmailValidation, PasswordValidation} from '@src/types/auth';

export const getOTPCountdownNumber = (
  number: number,
  padString = '0',
  length = 2,
) => {
  let str = number.toString();
  while (str.length < length) {
    str = padString + str;
  }
  return str;
};

export const validateEmail = (email: string) => {
  const res: EmailValidation = {
    status: '',
    error: false,
  };

  if (!email) {
    return res;
  }

  const patternEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  if (!patternEmail.test(email)) {
    res.error = true;
    res.status = 'Enter valid email';
    return res;
  }

  return res;
};

export const validatePassword = (password: string) => {
  const res: PasswordValidation = {
    status: '',
    error: false,
  };

  if (!password) {
    return res;
  }

  const patternLowerCase = new RegExp('(?=.*[a-z])');
  const patternUpperCase = new RegExp('(?=.*[A-Z])');
  const patternSymbol = new RegExp('(?=.[$-/:-?{-~!"^_`\\[\\]])');

  if (!patternLowerCase.test(password)) {
    res.error = true;
    res.status = 'Must contain at least 1 lowercase letter';
    return res;
  }

  if (!patternUpperCase.test(password)) {
    res.error = true;
    res.status = 'Must contain at least 1 uppercase letter';
    return res;
  }

  if (!patternSymbol.test(password)) {
    res.error = true;
    res.status = 'Must contain at least a symbol';
    return res;
  }

  if (password.length < 8) {
    res.error = true;
    res.status = 'Minimum 8 character';
    return res;
  }

  return res;
};
