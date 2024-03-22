/*
buatkan code yg nunjukin 1 - 10, angka ganjil bing angka genap bom
*/

function myFunction() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log("Bing");
    } else {
      console.log("Bom");
    }
  }
}

myFunction();
