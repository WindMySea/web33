// Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
// Code
function addSeconds(time, x) {
  // Chuyển đổi chuỗi thời gian ban đầu thành số giây
  let seconds = +time.split(":").reduce((acc, curr) => 60 * acc + +curr);

  // Tính toán số giây mới và chuyển đổi lại thành chuỗi thời gian mới
  let newSeconds = seconds + x;
  let newTime = new Date(newSeconds * 1000).toISOString().substr(11, 8);

  return newTime; // Kết quả
}

// Ví dụ
let time = "09:20:56";
let x = 7;
let newTime = addSeconds(time, x);
console.log(newTime); // Kết quả: '09:21:03'



// Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
// Code
function daysToClimb(h, x, y) {
  if (x <= y) {
    return "Không leo lên được miệng giếng"; // Trả về không thể lên được miệng giếng
  }
  return Math.ceil((h - x) / (x - y)) + 1;
}

console.log(daysToClimb(30, 4, 5));
console.log(daysToClimb(30, 5, 4));
console.log(daysToClimb(30, 5, 3));
console.log(daysToClimb(10, 5, 4)); // 5 - 4 = 1 | 1 + 5 - 4 = 2 | 2 + 5 - 4 = 3 | 3 + 5 -4 = 4 | 4 + 5 - 4 = 5 | 5 + 5 = miệng giếng
console.log(daysToClimb(5, 5, 4)); // 5 + 5 = lên miệng giếng 
console.log(daysToClimb(5, 2, 1)); // 2 - 1 = 1 | 1 + 2 - 1 = 2 | 2 + 2 - 1 = 3 | 3 + 2 = lên miệng giếng

// Time cụ thể

// function daysToClimb(h, x, y) {
//   if (x <= y) {
//     return "Không leo lên được miệng giếng"; // Trả về không thể lên được miệng giếng
//   }
//   const maxDays = Math.floor((h - x) / (x - y));
//   const lastDayDistance = x - y;
//   const lastDayTime = lastDayDistance / x;
//   return maxDays + lastDayTime;
// }

// console.log(daysToClimb(30, 4, 5));
// console.log(daysToClimb(30, 5, 4));
// console.log(daysToClimb(30, 5, 3));
// console.log(daysToClimb(10, 5, 4)); // 5 - 4 = 1 | 1 + 5 - 4 = 2 | 2 + 5 - 4 = 3 | 3 + 5 -4 = 4 | 4 + 5 - 4 = 5 | 5 + 5 = miệng giếng
// console.log(daysToClimb(5, 5, 4)); // 5 + 5 = lên miệng giếng
// console.log(daysToClimb(5, 2, 1)); // 2 - 1 = 1 | 1 + 2 - 1 = 2 | 2 + 2 - 1 = 3 | 3 + 2 = lên miệng giếng


// Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
// Code
function sapXepChuSo(number) {
  // Chuyển số nguyên thành một mảng các chữ số
  let digits = number.toString().split("");

  // Sắp xếp mảng các chữ số theo thứ tự tăng dần
  digits.sort();

  // Kiểm tra nếu chữ số đầu tiên là số 0
  if (digits[0] === "0") {
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] !== "0") {
        // Di chuyển chữ số 0 đến vị trí đầu tiên
        digits.splice(0, 0, digits.splice(i, 1)[0]);
        break;
      }
    }
  }

  // Ghép lại các chữ số thành số nguyên mới
  let result = parseInt(digits.join(""));

  return result; // Kết quả
}
// Ví dụ
console.log(sapXepChuSo(530751)); // 103557
console.log(sapXepChuSo(9876543210)); // 123456789
console.log(sapXepChuSo(10000)); // 10000
console.log(sapXepChuSo(123465003948)); // 100233445689
console.log(sapXepChuSo(1589406869329)); // 1023456688999