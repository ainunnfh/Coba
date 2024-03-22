/**
 * Tulis fungsi yang menggunakan angka sebagai parameter.
 * Jika angkanya genap, kembalikan nilai true
 * Jika tidak, kembalikan false
 */

function is_even(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(is_even(4));

function checkNum(num) {
  return num % 2 === 0 ? true : false;
}
