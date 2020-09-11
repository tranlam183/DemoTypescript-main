// Kiểu dữ liệu trong Typescript
// String type
var fullName = 'Tran Thanh Lam';
var old = 'sinh nam 1999';
console.log("\nXin chao,toi la " + fullName + "," + old + " !\n");
// Boolean type
var sex = true;
if (sex) {
    console.log("Male");
}
else {
    console.log("Female");
}
// Number type
var x = 7;
console.log(x);
//Null and Undefined 
var u = undefined;
var n = null;
// Array type
// Mảng chữ
var hocvien = ['lam', 'linh', 'thanh'];
for (var i = 0; i < hocvien.length; i++) {
    console.log(hocvien[i]);
}
// Kiểu số
var songuyen = [2, 4, 6];
for (var i = 0; i < songuyen.length; i++) {
    console.log(songuyen[i]);
}
// Enum type
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
console.log(Color1.Blue);
// Tuple type
var types = ['Lam', 21, 'Sinhvien'];
console.log(types[0]);
// Any type
var introduce;
introduce = {
    name: 'lam',
    old: 21,
    height: '1m73'
};
console.log(introduce);
// Void type
function type1() {
    console.log('Đây là kiểu dữ liệu Void');
}
type1();
// Ép kiểu
var kieu;
kieu = 'Hello everybody';
// C1
console.log(kieu.length);
//C2
console.log(kieu.length);
// Function trong Typescript
//Ham tra ve kieu Number
function showNum() {
    var sum = 99 + 1;
    return sum;
}
console.log(showNum());
// Hàm trả về string
function showString() {
    return 'Good morning!';
}
console.log(showString());
// Ham tra ve kieu Mang
function showArr() {
    return ['League of Legends', 'AOE', 'Half life'];
}
console.log(showArr());
// Mang kieu doi tuong 
function doituong() {
    return {
        ten: 'yasuo',
        kinang: {
            kinang1: 'Bão kiếm',
            kinang2: 'Trăn trối'
        }
    };
}
console.log(doituong());
// Hàm có tham số
function tinhtbc(x, y) {
    var tbc = (x + y) / 2;
    console.log('trung binh cong ' + x + ' va ' + y + ' la : ' + tbc);
}
tinhtbc(99, 1);
// Anonymous function
var z = function (x, y) {
    return " " + y + " nam nay " + x + " tuoi co phai khong? ";
};
console.log(z(21, 'Lam'));
//khong can Function
var h = function (x) {
    return x + 10;
};
console.log(h(9));
