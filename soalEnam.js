/*
Tulis fungsi yang menggunakan angka a sebagai parameter
Pisahkan tiap angka menjadi array
*/

function myFunction(a) {
  const arrChar = a.toString().split("");
  return arrChar.map((char) => +char);
}

console.log(myFunction(10));
