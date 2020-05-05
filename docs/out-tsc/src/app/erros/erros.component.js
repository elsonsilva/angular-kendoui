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
var erros_service_1 = require("./erros.service");
// import { TotaisDiaService } from './../totais/totais-dia.service';
var ErrosComponent = /** @class */ (function () {
    // when OnDestroy is called.
    function ErrosComponent(sanitizer, _totaisDiaService) {
        this._totaisDiaService = _totaisDiaService;
        this.totais = [];
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    ErrosComponent.prototype.ngOnInit = function () {
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
        IntervalObservable_1.IntervalObservable.create(30000)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () {
            _this._totaisDiaService.getErros(_this.id)
                .subscribe(function (totais) {
                _this.totais = totais;
            });
        });
    };
    ErrosComponent.prototype.ngOnChanges = function () {
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
    ErrosComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ErrosComponent.prototype, "idProduto", void 0);
    ErrosComponent = __decorate([
        core_1.Component({
            selector: 'app-erros',
            templateUrl: './erros.component.html',
            styleUrls: ['./erros.component.scss']
        })
        // export class AcumuladoComponent implements OnInit, AfterContentInit {
        ,
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, erros_service_1.ErrosService])
    ], ErrosComponent);
    return ErrosComponent;
}());
exports.ErrosComponent = ErrosComponent;
//# sourceMappingURL=erros.component.js.map