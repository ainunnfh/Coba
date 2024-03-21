/** 
Tulis fungsi yang menggunakan dua string (a dan b) sebagai parameter.
Jika a berisi b, tambahkan b ke awal a.
Jika tidak, tambahkaan diakhir a.
Return hasilnya
 */

function myFunction(a, b) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
}

// using ternary operator

function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}

console.log(myFunction("cheese", "cake"));
console.log(myFunction("leeps", "s"));
