/**
 * Tulis fungsi yang menggunakan dua string(a dan b)sebagai parameter
 * Return ada berapa character(a) di kalimat (b)
 */

function myFunction(a, b) {
  return b.split(a).length - 1;
}

console.log(
  myFunction("c", "how many times does the character occur in this sentence?")
);
