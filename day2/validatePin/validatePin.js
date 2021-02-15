// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// FIRST TRY
// function validatePin(pin) {
//   if (parseInt(pin) < 0 || pin.split('.').length !== 1 || !pin) {
//     return false;
//   }

//   const regex = /\d/g;
//   const found = pin.match(regex);

//   if (found.length !== pin.length) {
//     return false;
//   }

//   return found.length === 4 || found.length === 6;
// }

// SECOND TRY
function validatePin(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

module.exports = validatePin;
