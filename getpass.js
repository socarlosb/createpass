const stringLength = process.argv[2] !== undefined ? process.argv[2] : 16;
const numberOfStrings = process.argv[3] !== undefined ? process.argv[3] : 6;

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generatePassword(stringLength, charset) {
  retVal = "";
  for (let i = 0, n = charset.length; i < stringLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
console.log(
  `${numberOfStrings} Password(s) were created with ${stringLength} characters:`
);
for (let i = 0; i < numberOfStrings; ++i) {
  console.log(generatePassword(stringLength, charset));
}
