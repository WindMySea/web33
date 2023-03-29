// Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.
// Code
function filterFalsyValues(arr) {
  return arr.filter(Boolean); // loại bỏ giá trị
}
// Ví dụ
let arr = [0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN];
let filteredArr = filterFalsyValues(arr);
console.log(filteredArr); // [1, 2, 3, 4, 5]



// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
// Code
function findLongestStrings(arr1) {
  const maxLength = arr1.reduce((max, str) => Math.max(max, str.length), 0);
  return arr1.filter((str) => str.length === maxLength); // So sánh số lượng ký tự
}

// Ví dụ
let arr1 = ["aba", "aa", "ad", "c", "vcd"];
let longestStrings = findLongestStrings(arr1);
console.log(longestStrings); // ['aba', 'vcd']

// Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
// Code
function compareArrays(arr2, arr3) {
  const diff1 = arr2.filter((item) => !arr3.includes(item));
  const diff2 = arr3.filter((item) => !arr2.includes(item));
  return diff1.concat(diff2); // Kết quả so sánh sàn lọc
}

// Ví dụ
let arr2 = [1, 2, 3];
let arr3 = [1, 3, 4, 5, 5];
let result = compareArrays(arr2, arr3);
console.log(result);


// Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau                 [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
// Code
function createZigZagArray(m, n) {
  // Khởi tạo mảng một chiều và mảng 2 chiều
  const arr4 = [];
  const result1 = [];
  for (let i = 0; i < m * n; i++) {
    arr4[i] = i + 1;
  }

  // Chuyển đổi mảng một chiều thành mảng 2 chiều theo kiểu ziczac
  for (let i = 0; i < m; i++) {
    result1[i] = [];
    for (let j = 0; j < n; j++) {
      if (i % 2 === 0) {
        result1[i][j] = arr4[i * n + j];
      } else {
        result1[i][j] = arr4[(i + 1) * n - j - 1];
      }
    }
  }

  // Trả về mảng kết quả
  return result1;
}

// Ví dụ
console.log(createZigZagArray(3, 4)); // [[1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12]]
console.log(createZigZagArray(5, 6)); // [[ 1, 2, 3, 4, 5, 6 ], [ 12, 11, 10, 9, 8, 7 ], [ 13, 14, 15, 16, 17, 18 ], [ 24, 23, 22, 21, 20, 19 ], [ 25, 26, 27, 28, 29, 30 ]]