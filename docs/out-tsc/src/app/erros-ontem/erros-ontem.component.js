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
var erros_ontem_service_1 = require("./erros-ontem.service");
var ErrosOntemComponent = /** @class */ (function () {
    // when OnDestroy is called.
    function ErrosOntemComponent(sanitizer, _totaisDiaService) {
        this._totaisDiaService = _totaisDiaService;
        this.totais = [];
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    ErrosOntemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._totaisDiaService.getErros(this.id)
            .pipe(operators_1.first())
            .subscribe(function (totais) {
            _this.totais = totais;
            _this.display = true;
        });
        // get our data every subsequent 10 seconds
        // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
        // IntervalObservable.create(30000)
        // .pipe(
        //   takeWhile(() => this.alive)
        //  )
        //   .subscribe(() => {
        //     this._totaisDiaService.getErros(this.id)
        //       .subscribe(totais => {
        //         this.totais = totais;
        //       });
        //   });
    };
    ErrosOntemComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._totaisDiaService.getErros(this.id)
            .pipe(operators_1.first())
            .subscribe(function (totais) {
            _this.totais = totais;
            _this.display = true;
        });
    };
    ErrosOntemComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ErrosOntemComponent.prototype, "idProduto", void 0);
    ErrosOntemComponent = __decorate([
        core_1.Component({
            selector: 'app-erros-ontem',
            templateUrl: './erros-ontem.component.html',
            styleUrls: ['./erros-ontem.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, erros_ontem_service_1.ErrosOntemService])
    ], ErrosOntemComponent);
    return ErrosOntemComponent;
}());
exports.ErrosOntemComponent = ErrosOntemComponent;
//# sourceMappingURL=erros-ontem.component.js.map