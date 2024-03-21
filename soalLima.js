/*
Tulis fungsi yang mengambil dua angka (a dan b) sebagai parameter.
Jika a lebih kecil dari b, bagilah a dengan b
Jika tidak, kalikan kedua angka tersebut
Return hasilnya
*/

function myFunction(a, b) {
  return a < b ? a / b : a * b;
}

console.log(myFunction(10, 2));
