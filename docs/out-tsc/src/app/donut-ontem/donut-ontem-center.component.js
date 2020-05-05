"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var operators_1 = require("rxjs/operators");
var donut_ontem_center_service_1 = require("./donut-ontem-center.service");
var DonutOntemCenterComponent = /** @class */ (function () {
    // when OnDestroy is called.
    // constructor(sanitizer: DomSanitizer, private _donutCenterService: DonutCenterService) {
    function DonutOntemCenterComponent(sanitizer, _donutOntemCenterService) {
        this._donutOntemCenterService = _donutOntemCenterService;
        this.donutcenters = [];
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    DonutOntemCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idDonut = this.idProduto;
        // this.idDonut = 21011;
        // console.log('GETID:' + this.idDonut);
        // get our data immediately when the component inits
        this._donutOntemCenterService.getDonutCenter(this.idDonut)
            .pipe(operators_1.first())
            .subscribe(function (donutcenters) {
            _this.donutcenters = donutcenters;
            _this.display = true;
        });
        // get our data every subsequent 10 seconds
        // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
        // IntervalObservable.create(30000)
        // .pipe(
        //   takeWhile(() => this.alive)
        //  )
        //   .subscribe(() => {
        //     this._donutCenterService.getDonutCenter(this.idDonut)
        //       .subscribe(donutcenters => {
        //         this.donutcenters = donutcenters;
        //       });
        //   });
    };
    DonutOntemCenterComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.idDonut = this.idProduto;
        // this.idDonut = 21011;
        // get our data immediately when the component inits
        this._donutOntemCenterService.getDonutCenter(this.idDonut)
            .pipe(operators_1.first())
            .subscribe(function (donutcenters) {
            _this.donutcenters = donutcenters;
            _this.display = true;
        });
    };
    DonutOntemCenterComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DonutOntemCenterComponent.prototype, "idProduto", void 0);
    DonutOntemCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-donut-ontem-center',
            templateUrl: './donut-ontem-center.component.html',
            styleUrls: ['./donut-ontem-center.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, donut_ontem_center_service_1.DonutOntemCenterService])
    ], DonutOntemCenterComponent);
    return DonutOntemCenterComponent;
}());
exports.DonutOntemCenterComponent = DonutOntemCenterComponent;
//# sourceMappingURL=donut-ontem-center.component.js.map