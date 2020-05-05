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
var donut_ontem_service_1 = require("./donut-ontem.service");
var DonutOntemComponent = /** @class */ (function () {
    function DonutOntemComponent(sanitizer, _donutOntemService) {
        this._donutOntemService = _donutOntemService;
        this.donuts = [];
        this.idSelecionado = 24151;
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    DonutOntemComponent.prototype.recebeProduto = function (titulo) {
        // console.log(titulo);
        this.idSelecionado = this.idProduto;
    };
    DonutOntemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recebeProduto(this.titulo);
        //  console.log('teste1: ' + this.idSelecionado);
        this.id = this.idSelecionado;
        // get our data immediately when the component inits
        this._donutOntemService.getDonut(this.id)
            .pipe(operators_1.first())
            .subscribe(function (donuts) {
            _this.donuts = donuts;
            _this.display = true;
        });
        // get our data every subsequent 10 seconds
        // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
        // IntervalObservable.create(30000)
        // .pipe(
        //   takeWhile(() => this.alive)
        //  )
        //   .subscribe(() => {
        //     this._donutService.getDonut(this.id)
        //       .subscribe(donuts => {
        //         this.donuts = donuts;
        //       });
        //   });
    };
    DonutOntemComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.recebeProduto(this.titulo);
        //  console.log('teste2: ' + this.idSelecionado);
        this.id = this.idSelecionado;
        // get our data immediately when the component inits
        this._donutOntemService.getDonut(this.id)
            .pipe(operators_1.first())
            .subscribe(function (donuts) {
            _this.donuts = donuts;
            _this.display = true;
        });
    };
    DonutOntemComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DonutOntemComponent.prototype, "idProduto", void 0);
    DonutOntemComponent = __decorate([
        core_1.Component({
            selector: 'app-donut-ontem',
            templateUrl: './donut-ontem.component.html',
            styleUrls: ['./donut-ontem.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, donut_ontem_service_1.DonutOntemService])
    ], DonutOntemComponent);
    return DonutOntemComponent;
}());
exports.DonutOntemComponent = DonutOntemComponent;
//# sourceMappingURL=donut-ontem.component.js.map