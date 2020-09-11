// Kiểu dữ liệu trong Typescript
// String type
let fullName: string = 'Tran Thanh Lam';

let old: string = 'sinh nam 1999';

console.log(`
Xin chao,toi la ${fullName},${old} !
`);

// Boolean type
let sex: boolean = true;
if (sex) {
    console.log("Male");
}
else {
    console.log("Female");
}

// Number type
let x: number = 7;
console.log(x);

//Null and Undefined 
let u: undefined = undefined;
let n: null = null;

// Array type
// Mảng chữ
let hocvien: string[] = ['lam', 'linh', 'thanh']
for (let i = 0; i < hocvien.length; i++) {
    console.log(hocvien[i]);
}

// Kiểu số
let songuyen: number[] = [2, 4, 6];
for (let i = 0; i < songuyen.length; i++) {
    console.log(songuyen[i]);
}

// Enum type
enum Color1 { Red, Green, Blue };
console.log(Color1.Blue);

// Tuple type
let types: [string, number, string] = ['Lam', 21, 'Sinhvien'];
console.log(types[0]);

// Any type
let introduce: any;
introduce = {
    name: 'lam',
    old: 21,
    height: '1m73'
}
console.log(introduce);

// Void type
function type1(): void {
    console.log('Đây là kiểu dữ liệu Void');
}
type1();

// Ép kiểu
let kieu: any;
kieu = 'Hello everybody';
// C1
console.log((<string>kieu).length);
//C2
console.log((kieu as string).length);

// Function trong Typescript
//Ham tra ve kieu Number
function showNum(): number {
    let sum = 99 + 1;
    return sum;
}
console.log(showNum());

// Hàm trả về string
function showString(): string {
    return 'Good morning!';
}
console.log(showString());

// Ham tra ve kieu Mang
function showArr(): string[] {
    return ['League of Legends', 'AOE', 'Half life']
}
console.log(showArr());

// Mang kieu doi tuong 
function doituong(): any {
    return {
        ten: 'yasuo',
        kinang: {
            kinang1: 'Bão kiếm',
            kinang2: 'Trăn trối'
        }
    }
}
console.log(doituong());

// Hàm có tham số
function tinhtbc(x: number, y: number): void {
    var tbc = (x + y) / 2;
    console.log('trung binh cong ' + x + ' va ' + y + ' la : ' + tbc);

}
tinhtbc(99, 1);

// Anonymous function
var z = function (x: number, y: string): string {
    return ` ${y} nam nay ${x} tuoi co phai khong? `;
}
console.log(z(21, 'Lam'));

//khong can Function
var h = (x: number): number => {
    return x + 10;
}
console.log(h(9));
