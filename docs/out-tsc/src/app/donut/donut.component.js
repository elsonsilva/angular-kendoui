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
var IntervalObservable_1 = require("rxjs/observable/IntervalObservable");
var donut_service_1 = require("./donut.service");
var DonutComponent = /** @class */ (function () {
    function DonutComponent(sanitizer, _donutService) {
        this._donutService = _donutService;
        this.donuts = [];
        this.idSelecionado = 24151;
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    DonutComponent.prototype.recebeProduto = function (titulo) {
        // console.log(titulo);
        this.idSelecionado = this.idProduto;
    };
    DonutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recebeProduto(this.titulo);
        //  console.log('teste1: ' + this.idSelecionado);
        this.id = this.idSelecionado;
        // get our data immediately when the component inits
        this._donutService.getDonut(this.id)
            .pipe(operators_1.first())
            .subscribe(function (donuts) {
            _this.donuts = donuts;
            _this.display = true;
        });
        // get our data every subsequent 10 seconds
        // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
        IntervalObservable_1.IntervalObservable.create(30000)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () {
            _this._donutService.getDonut(_this.id)
                .subscribe(function (donuts) {
                _this.donuts = donuts;
            });
        });
    };
    DonutComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.recebeProduto(this.titulo);
        //  console.log('teste2: ' + this.idSelecionado);
        this.id = this.idSelecionado;
        // get our data immediately when the component inits
        this._donutService.getDonut(this.id)
            .pipe(operators_1.first())
            .subscribe(function (donuts) {
            _this.donuts = donuts;
            _this.display = true;
        });
    };
    DonutComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DonutComponent.prototype, "idProduto", void 0);
    DonutComponent = __decorate([
        core_1.Component({
            selector: 'app-donut',
            templateUrl: './donut.component.html',
            styleUrls: ['./donut.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, donut_service_1.DonutService])
    ], DonutComponent);
    return DonutComponent;
}());
exports.DonutComponent = DonutComponent;
//# sourceMappingURL=donut.component.js.map