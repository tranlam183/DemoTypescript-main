//interface class
var tuong = /** @class */ (function () {
    function tuong() {
    }
    tuong.prototype.xemtuong = function () {
        console.log('xem');
    };
    tuong.prototype.donkinang = function (mau) {
        return 'don ki nang';
    };
    tuong.prototype.bienve = function () {
        console.log('bien ve');
    };
    return tuong;
}());
