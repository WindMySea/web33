# Javascript là gì?
* Javascript (JS) là một ngôn ngữ kịch bản phía client
* Javascript được sử dụng rộng rãi trong việc kết hợp với HTML/CSS để thiết kế web
động.
# Javascript dùng để làm gì?
* Sửa đổi nội dung của một trang web.
* Thay đổi style và vị trí của các thành phần trên trang web.
* Phản hồi với các sự kiện từ người dùng.
* Thực hiện và kiểm soát việc chuyển tiếp các hình ảnh động.
* Thông báo cho người dùng.
* Thao tác với dữ liệu đầu vào và hiển thị kết quả sau khi xử lý.
* Xác thực dữ liệu đầu vào của người dùng trước khi gửi nó đến máy chủ.
# Biến là gì?
* Biến là một định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta có thể thực hiện các thao tác với dữ liệu.
* Mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến có các thao tác khác nhau với biến.
# Khai báo biến
Sử dụng từ khóa `let`, `const` để khai báo biến

## Sử dụng `let`
* Khai báo biến bình thường
```
// Khai báo biến
let number;

// Khai báo biến và khởi tạo giá trị
let age = 20;
```
## Sử dụng `const`
* Được sử dụng để khai báo hằng số
```
const number = 10
```
Không thể gán lại giá trị cho 1 biến const

## Quy tắc đặt tên biến
* Chứa các ký tự chữ, số, _ và $
* Ký tự đầu tiên không được là số (nên là chữ)
* Có phân biệt hoa thường
* Không trùng với các từ khóa của Javascript như: for, while, this, …
* Nên đặt tên theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc.

## Kiểm tra kiểu dữ liệu của biến
* Để kiểm tra kiểu dữ kiệu của 1 biến, chúng ta sử dụng toán tử `typeof`

let number = 10;
console.log(typeof number); // "number"

let name = "Bùi Hiên";
console.log(typeof name); // "string"

# Kiểu dữ liệu String
* String (chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.

* Các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ’ hoặc nháy kép ".


let name = “Nguyễn Văn A”;
let email = “abc@gmail.com”;

# Nối chuỗi trong Javascript
* Để nối chuỗi chúng ta sử dụng dấu + để ghép hai chuỗi (hoặc biến) lại với nhau.

## Một số lưu ý
* Trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó.
* Khi bạn muốn Enter xuống hàng một chuỗi thì bắt buộc phải sử dụng dấu + để nối chuỗi.

# Function là gì?
* Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.

## Cú pháp định nghĩa function

function functionName(para_1, ..., para_n) {
 // code thực thi function
}

## Thực thi function

functionName(para_1, ..., para_n)

# Phân biệt tham số (parameter) và đối số (argument)
* Tham số (parameter) là biến trong khai báo hàm.
* Đối số (argument) là giá trị thực của biến này được truyền vào hàm.



# Một số loại function
* Function có các loại sau

1. Function có tham số, hoặc không có tham số
2. Function có giá trị trả về hoặc không

> Function không có tham số
function sayHello() {
    console.log("Xin chào các bạn");
}

sayHello();

> Function có tham số
Với function kiểu này có thể có một hoặc nhiều tham số (không nên quá 3 tham số)

// Ví dụ function có 1 tham số
function sayHello(name) {
    console.log(`Xin chào ${name}`);
}
sayHello("Bùi Hiên");

// Ví dụ function có 2 tham số
function sayHello_1(name, city) {
    console.log(`Tôi tên là ${name}, quê tôi ở ${city}`);
}
sayHello_1("Bùi Hiên", "Thái Bình");

> Function trả về kết quả
Để trả về kết quả, sử dụng từ khóa return

function sum(a, b) {
    return a + b;
}

let data = sum(3, 4);
console.log(data);

// Nếu muốn kiểm tra nhanh kết quả của function có thể sử dụng luôn console.log
console.log(sum(4, 5));

### Chú ý : Những câu lệnh đằng sau từ khóa return sẽ không được thực thi

Ví dụ:

function sum(a, b) {
    return a + b;
    console.log(a); // không được thực thi
    console.log(b); // không được thực thi
}

> Function không trả về kết quả
Đối với function không có từ khóa return thì coi như function đó không trả về kết quả

# Kiểu dữ liệu Boolean
* Giá trị của kiểu dữ liệu này chỉ có thể là true hoặc false

* ruthy value là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là true.

* Ngược lại, Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là false

##Note:

* Có 6 giá trị sau được coi là falsy : false, 0, NaN, ‘’, null, undefined
* Các giá trị còn lại, ngoài các giá trị trên được gọi là truthy

# Scope có thể hiểu nôm na là “phạm vi sử dụng của biến”

## Có 3 loại scope:

* Global scope
* Function scope
* Block scope
* Global scope
## Một biến được coi là global scope (toàn cục) nếu biến đó được định nghĩa bên ngoài function

let name = "Bùi Hiên";
let age = 25;

console.log(name);
console.log(age);

# Function scope
* Một biến được coi là function scope nếu biến đó được định nghĩa bên trong function

function hello() {
    let name = "Bùi Hiên";
    console.log(name);
}

hello(); // Bùi Hiên
console.log(name) // Lỗi

# Block scope
* Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}

{
    let name = "Bùi Hiên";
    console.log(name); // Bùi Hiên
}

console.log(name) // Lỗi

## Chú ý
Nếu 1 biến không có từ khóa khai báo biến, sẽ trở thành biền global

function sayHello() {
    number = 10;
    console.log(number);
}

sayHello() // 10

console.log(number); // 10
