import {PasswordValidation} from '@src/types/auth';

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

export const validatePassword = (password: string) => {
  const res: PasswordValidation = {
    status: '',
    error: false,
  };

  if (!password) {
    return res;
  }

  const pattern_lowerCase = new RegExp('(?=.*[a-z])');
  const pattern_upperCase = new RegExp('(?=.*[A-Z])');
  const pattern_symbol = new RegExp('(?=.[$-/:-?{-~!"^_`\\[\\]])');

  if (!pattern_lowerCase.test(password)) {
    res.error = true;
    res.status = 'Must contain at least 1 lowercase letter';
    return res;
  }

  if (!pattern_upperCase.test(password)) {
    res.error = true;
    res.status = 'Must contain at least 1 uppercase letter';
    return res;
  }

  if (!pattern_symbol.test(password)) {
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
