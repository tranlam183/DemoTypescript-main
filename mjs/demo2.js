// Lập trình hướng đối tượng
// Class 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var dienthoai = /** @class */ (function () {
    function dienthoai(ten, gia, danhgia, mausac) {
        this.ten = ten;
        this.gia = gia;
        this.danhgia = danhgia;
        this.mausac = mausac;
    }
    dienthoai.prototype.mausp = function () {
        return "San pham " + this.ten + " co gia la " + this.gia + "\n        danhgia: " + this.danhgia + " sao\n        co " + this.mausac.length + " mau\n        la : " + this.mausac[0] + " ," + this.mausac[1] + " ," + this.mausac[2];
    };
    return dienthoai;
}());
var sanpham1 = new dienthoai('SamSungS8', 2020, 5, ['xanh', 'vang', 'den']);
console.log(sanpham1.mausp());
// Tinh kế thừa
var hero = /** @class */ (function () {
    function hero(tennv, slogan, kinang) {
        this.tennv = tennv;
        this.slogan = slogan;
        this.kinang = kinang;
    }
    hero.prototype.showThongtin = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i];
            kn += ' | ';
        }
        return "\n        T\u00EAn t\u01B0\u1EDBng: " + this.tennv + ",\n        M\u00F4 t\u1EA3 : " + this.slogan + ",\n        K\u0129 n\u0103ng : " + kn + ",\n        ";
    };
    return hero;
}());
var Satthu = /** @class */ (function (_super) {
    __extends(Satthu, _super);
    function Satthu(tennv, slogan, kinang, donsatthu) {
        var _this = _super.call(this, tennv, slogan, kinang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    Satthu.prototype.showThongtin = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i];
            kn += ' | ';
        }
        return "\n        T\u00EAn t\u01B0\u1EDBng: " + this.tennv + ",\n        M\u00F4 t\u1EA3 : " + this.slogan + ",\n        K\u0129 n\u0103ng : " + kn + ",\n        \u0110\u00F2n s\u00E1t th\u1EE7 : " + this.donsatthu + ";\n        ";
    };
    return Satthu;
}(hero));
var nhanvat1 = new hero('Zed', 'Chúa tể bóng đêm', ['Gieo rắc nỗi sợ', 'Dấu ấn tử thần']);
var nhanvat2 = new hero('Leesin', 'Thầy tu mù', ['Sóng âm', 'Nộ long cước']);
console.log(nhanvat2.showThongtin());
var Talon = new Satthu('Talon', 'Chúa tể bóng tối', ['Nỗi sợ sâu thẳm', 'Dấu ấn tử thần'], 'Sát thủ vô hình');
console.log(Talon.showThongtin());
// Access modifier
var khoahoc = /** @class */ (function () {
    function khoahoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    khoahoc.prototype.xemkhoahoc = function () {
        console.log(this.ten); //ben trong class
        console.log("\n        ID kh\u00F3a h\u1ECDc l\u00E0 : " + this.id + "\n        T\u00EAn kh\u00F3a h\u1ECDc l\u00E0 : " + this.ten + "\n        \u0110\u1ED9 d\u00E0i l\u00E0 : " + this.dodai + "\n        ");
    };
    return khoahoc;
}());
var khoalaptrinh = /** @class */ (function (_super) {
    __extends(khoalaptrinh, _super);
    function khoalaptrinh(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    khoalaptrinh.prototype.xemkhoahoc = function () {
        _super.prototype.xemkhoahoc.call(this);
        console.log('Filedinhkem :' + this.filedinhkem);
    };
    khoalaptrinh.prototype.test1 = function () {
        console.log(this.ten);
    };
    return khoalaptrinh;
}(khoahoc));
//test public
var khoaf8 = new khoahoc(7, 'học backend', 6);
var khoaf7 = new khoalaptrinh(9, 'hoc frontend', 8, 'a.html');
console.log(khoaf8.xemkhoahoc()); //ben ngoai class
khoaf7.test1(); // truy nhap tu class con
function xemtt(motnguoi) {
    console.log("\n    Xin ch\u00E0o," + motnguoi.ten + " n\u0103m nay b\u1EA1n " + motnguoi.tuoi + " tu\u1ED5i ph\u1EA3i kh\u00F4ng ?\n    ");
}
xemtt({ tuoi: 21, ten: 'Lâm' });
