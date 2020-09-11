// Lập trình hướng đối tượng
// Class 

class dienthoai {
    ten: string;
    gia: number;
    danhgia: number;
    mausac: string[];

    constructor(ten: string, gia: number, danhgia: number, mausac: string[]) {
        this.ten = ten;
        this.gia = gia;
        this.danhgia = danhgia;
        this.mausac = mausac;
    }
    mausp() {
        return `San pham ${this.ten} co gia la ${this.gia}
        danhgia: ${this.danhgia} sao
        co ${this.mausac.length} mau
        la : ${this.mausac[0]} ,${this.mausac[1]} ,${this.mausac[2]}`;
    }

}
var sanpham1 = new dienthoai('SamSungS8', 2020, 5, ['xanh', 'vang', 'den']);
console.log(sanpham1.mausp());

// Tinh kế thừa
class hero {
    tennv: string;
    slogan: string;
    kinang: string[];

    constructor(tennv: string, slogan: string, kinang: string[]) {
        this.tennv = tennv;
        this.slogan = slogan;
        this.kinang = kinang;
    }
    showThongtin(): string {
        var kn: string = '';
        for (let i = 0; i < this.kinang.length; i++) {

            kn += this.kinang[i];
            kn += ' | ';

        }
        return `
        Tên tướng: ${this.tennv},
        Mô tả : ${this.slogan},
        Kĩ năng : ${kn},
        `
    }
}
class Satthu extends hero {
    donsatthu: string;

    constructor(tennv: string, slogan: string, kinang: string[], donsatthu: string) {
        super(tennv, slogan, kinang);
        this.donsatthu = donsatthu;
    }
    showThongtin(): string {
        var kn: string = '';
        for (let i = 0; i < this.kinang.length; i++) {

            kn += this.kinang[i];
            kn += ' | ';

        }
        return `
        Tên tướng: ${this.tennv},
        Mô tả : ${this.slogan},
        Kĩ năng : ${kn},
        Đòn sát thủ : ${this.donsatthu};
        `
    }
}
let nhanvat1 = new hero('Zed', 'Chúa tể bóng đêm', ['Gieo rắc nỗi sợ', 'Dấu ấn tử thần']);
let nhanvat2 = new hero('Leesin', 'Thầy tu mù', ['Sóng âm', 'Nộ long cước']);
console.log(nhanvat2.showThongtin());

let Talon = new Satthu('Talon', 'Chúa tể bóng tối', ['Nỗi sợ sâu thẳm', 'Dấu ấn tử thần'], 'Sát thủ vô hình',);

console.log(Talon.showThongtin());

// Access modifier

class khoahoc {
    public id: number;
    public ten: string;
    public dodai: number;

    constructor(id: number, ten: string, dodai: number) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    xemkhoahoc() {
        console.log(this.ten);//ben trong class

        console.log(`
        ID khóa học là : ${this.id}
        Tên khóa học là : ${this.ten}
        Độ dài là : ${this.dodai}
        `);
    }
}
class khoalaptrinh extends khoahoc {
    public filedinhkem: string;
    constructor(id: number, ten: string, dodai: number, filedinhkem: string) {
        super(id, ten, dodai);
        this.filedinhkem = filedinhkem;
    }
    xemkhoahoc() {
        super.xemkhoahoc();
        console.log('Filedinhkem :' + this.filedinhkem);

    }
    test1() {
        console.log(this.ten);

    }
}

//test public
let khoaf8 = new khoahoc(7, 'học backend', 6);

let khoaf7 = new khoalaptrinh(9, 'hoc frontend', 8, 'a.html');

console.log(khoaf8.xemkhoahoc()); //ben ngoai class

khoaf7.test1(); // truy nhap tu class con

