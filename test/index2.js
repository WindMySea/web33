// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
// Code
function capitalizeString(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) { // Sử dụng vòng lặp qua các ký tự và thay đổi chúng
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" "); // Kết quả trả về 1 chuỗi mới
}

// Ví Dụ
let str = "HELLO world";
let capitalizedStr = capitalizeString(str);
console.log(capitalizedStr); // "Hello World"



// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
// Code
function toSpinalCase(str1) {
  // Chuyển đổi chuỗi thành chữ thường
  str1 = str1.toLowerCase();
  // Chuyển đổi các ký tự có dấu sang ký tự không dấu
  str1 = str1.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // Thay thế khoảng trắng và dấu cách bằng dấu gạch ngang
  str1 = str1.replace(/[\s_]+/g, '-');
  // Xóa các dấu gạch ngang ở đầu và cuối chuỗi
  str1 = str1.replace(/(^-|-$)/g, '');
  // Trả về chuỗi dạng Spinal case
  return str1;
}

// Sử dụng hàm toSpinalCase
console.log(toSpinalCase('HELLO world')); // Kết quả: "hello-world"
console.log(toSpinalCase('Ngôn ngữ TIẾNG VIỆT')); // Kết quả: "ngon-ngu-tieng-viet"




// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.

// Code
function isPalindromeString(str2) {
  // Loại bỏ các ký tự đặc biệt và chuyển đổi chuỗi thành chữ thường
  str2 = str2.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // Đảo ngược chuỗi và so sánh với chuỗi gốc
  return str2 === str2.split("").reverse().join(""); // Trả về Kết quả
}
// Ví dụ
console.log(isPalindromeString("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeString("hello world")); // false
console.log(isPalindromeString("racecar")); // true


// Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''
// Code
function containsAllChars(str3, str4) {
  // Chuyển đổi chuỗi thành chữ thường để so sánh không phân biệt hoa thường
  str3 = str3.toLowerCase();
  str4 = str4.toLowerCase();
  // Kiểm tra xem toàn bộ các ký tự trong chuỗi thứ hai có trong chuỗi thứ nhất hay không
  return [...str4].every((char) => str3.includes(char)); // Kết quả
}
// Ví dụ
console.log(containsAllChars("HELLO world", "how"));
console.log(containsAllChars("HELLO world", "hey"));
console.log(containsAllChars("HELLO world", "ww"));
console.log(containsAllChars("HELLO world", "low"));

