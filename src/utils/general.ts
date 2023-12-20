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
