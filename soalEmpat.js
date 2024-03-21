/*
Tulis fungsi yang menggunakan angka (a) sebagai parameter.
Jika a adalah bilangan bulat, kembalikan true,
jika tidak, kembalikan false
*/

function myFunction(a) {
  return Number.isInteger(a);
}

function myFunction2(b) {
  return a - Math.floor(b) === 0;
}

console.log(myFunction(4))