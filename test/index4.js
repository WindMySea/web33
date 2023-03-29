// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
// Code
function averageAge(students) {
  const totalAge = students.reduce((acc, student) => acc + student.age, 0);
  return totalAge / students.length; // Kết quả tuổi trung bình
}
// Ví dụ 1 mảng học sinh
let students = [
  { name: "Huy", age: 20 },
  { name: "Wind", age: 22 },
  { name: "Sea", age: 19 },
  { name: "My", age: 21 },
];
console.log(averageAge(students)); // Kết quả là 20.5


// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
// Code
function sortByAgeDescending(arr) {
  return arr.sort((a, b) => b.age - a.age); // Kết quả
}

// Ví dụ 1 mảng học sinh
let students2 = [
  { name: "Huy", age: 20 },
  { name: "Wind", age: 22 },
  { name: "Sea", age: 19 },
  { name: "My", age: 21 },
];

console.log(sortByAgeDescending(students2));

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
// Code
function sortArrByName(arr1) {
  arr1.sort(function (a, b) {
    return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
  });
  return arr1;
}

// Ví dụ 1 mảng học sinh
let students3 = [
  { name: "Huy", age: 20 },
  { name: "Wind", age: 22 },
  { name: "Sea", age: 19 },
  { name: "My", age: 21 },
];

console.log(sortArrByName(students3));


// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
// Code
let filterStudentsByName = (students4) =>
  students4.filter((student4) => /^h/i.test(student4.name));

// Ví dụ 1 mảng học sinh
let students4 = [
  { name: "Huy", age: 20 },
  { name: "hương", age: 24 },
  { name: "Hân", age: 23 },
  { name: "huyen", age: 25 },
  { name: "Wind", age: 22 },
  { name: "Sea", age: 19 },
  { name: "My", age: 21 },
];

console.log(filterStudentsByName(students4)); // [{ name: 'Huy', age: 20 }, { name: 'hương', age: 24 }, { name: 'Hân', age: 23 }, { name: 'huyen', age: 25 }]

