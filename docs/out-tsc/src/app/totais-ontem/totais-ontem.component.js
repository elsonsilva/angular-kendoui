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
// import { IGapHist } from './gaps';
// import { IGapMeta } from './gaps';
var totais_ontem_service_1 = require("./totais-ontem.service");
var TotaisOntemComponent = /** @class */ (function () {
    function TotaisOntemComponent(sanitizer, _totaisOntemService) {
        this._totaisOntemService = _totaisOntemService;
        this.totaisOntem = [];
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    TotaisOntemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._totaisOntemService.getTotais(this.id)
            .pipe(operators_1.first())
            .subscribe(function (totaisOntem) {
            _this.totaisOntem = totaisOntem;
            _this.display = true;
        });
        // this._totaisDiaService.getGaps(this.id)
        // .first() // only gets fired once
        // .subscribe((gaphistorico) => {
        //   this.gaphistorico = gaphistorico;
        //   this.display = true;
        // });
        // get our data every subsequent 10 seconds
        // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
        //  IntervalObservable.create(30000)
        //  .pipe(
        //    takeWhile(() => this.alive)
        //   )
        //    .subscribe(() => {
        //      this._totaisDiaService.getTotais(this.id)
        //        .subscribe(totaisDia => {
        //          this.totaisDia = totaisDia;
        //        });
        //    });
    };
    TotaisOntemComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._totaisOntemService.getTotais(this.id)
            .pipe(operators_1.first())
            .subscribe(function (totaisOntem) {
            _this.totaisOntem = totaisOntem;
            _this.display = true;
        });
    };
    TotaisOntemComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TotaisOntemComponent.prototype, "idProduto", void 0);
    TotaisOntemComponent = __decorate([
        core_1.Component({
            selector: 'app-totais-ontem',
            templateUrl: './totais-ontem.component.html',
            styleUrls: ['./totais-ontem.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, totais_ontem_service_1.TotaisOntemService])
    ], TotaisOntemComponent);
    return TotaisOntemComponent;
}());
exports.TotaisOntemComponent = TotaisOntemComponent;
//# sourceMappingURL=totais-ontem.component.js.map