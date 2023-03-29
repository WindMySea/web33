// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

// Code
function calculateSphereVolume(radius) {
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // Tính thể tích hình cầu V = ⁴⁄₃πr³
  return volume.toFixed(2); // Kết quả
}
// Ví dụ
console.log(calculateSphereVolume(5));
console.log(calculateSphereVolume(10));
console.log(calculateSphereVolume(15));

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Code
function sumBetween(num1, num2) {
  let sum = 0; // Khai báo tổng 0
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);
  for (let i = start + 1; i < end; i++) {
    sum += i;
  }
  return sum; // Trả về kết quả tổng
}
console.log(sumBetween(2, 5));
console.log(sumBetween(1, 20));
console.log(sumBetween(1, 20));
console.log(sumBetween(30, 4));
console.log(sumBetween(30, 4));

// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

// Code
function sumDivisors(num) {
  let sum2 = 0; // Khai báo tổng bắt đầu bằng 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum2 += i;
    } // lặp qua tất cả ước và cộng tổng
  }
  return sum2; // Trả về kết quả tổng
}
console.log(sumDivisors(-10)); // Kết quả: 0
console.log(sumDivisors(-1)); // Kết quả: 0
console.log(sumDivisors(0)); // Kết quả: 0
console.log(sumDivisors(12)); // Kết quả: 28
console.log(sumDivisors(24)); // Kết quả: 60
console.log(sumDivisors(30)); // Kết quả: 72

// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

// Code
function isPrime(n) {
  for (let i = 2; i < n; i++) { // kiểm tra số nguyên tố
    if (n % i === 0) return false;
  }
  return n > 1; // Trả về kết quả là số nguyên dương
}
// Ví dụ
console.log(isPrime(5));
console.log(isPrime(15));
console.log(isPrime(-1));
console.log(isPrime(0));
console.log(isPrime(11));

// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.

// Code
function sumOfPrimes(num3) {
  // tạo một mảng chứa tất cả các số từ 2 đến num
  let nums = Array.from({ length: num3 - 1 }, (_, i) => i + 2);
  // lọc ra các số nguyên tố
  let primes = nums.filter((n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  });
  // tính tổng các số nguyên tố
  return primes.reduce((sum3, n) => sum3 + n, 0);
}

// ví dụ:
console.log(sumOfPrimes(10));
console.log(sumOfPrimes(20));
console.log(sumOfPrimes(30));
console.log(sumOfPrimes(0));
console.log(sumOfPrimes(1));
console.log(sumOfPrimes(-10));