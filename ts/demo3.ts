// Interface co ban
interface nguoi {
    tuoi: number;
    ten: string;
}

function xemtt(motnguoi: { tuoi: number, ten: string }): void {
    console.log(`
    Xin chào,${motnguoi.ten} năm nay bạn ${motnguoi.tuoi} tuổi phải không ?
    `);
}
xemtt({ tuoi: 21, ten: 'Lâm' });


//interface class

interface tuongInterface {
    ten: string;
    mau: number;
    satthuong: number;
    mota: string;

    xemtuong(): void;
    donkinang(mau: number): any;
    bienve(): void
}
class tuong implements tuongInterface {
    ten: string;
    mau: number;
    satthuong: number;
    mota: string;

    xemtuong(): void {
        console.log('xem');

    }
    donkinang(mau: number): any {
        return 'don ki nang';
    }
    bienve(): void {
        console.log('bien ve');

    }
}
