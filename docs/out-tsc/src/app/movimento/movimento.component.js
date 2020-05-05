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
var movimento_service_1 = require("./movimento.service");
// import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
var MovimentoComponent = /** @class */ (function () {
    // when OnDestroy is called.
    function MovimentoComponent(sanitizer, _movimentoService) {
        this._movimentoService = _movimentoService;
        this.movimentos = [];
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    MovimentoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._movimentoService.getMovimentos(this.id)
            .pipe(operators_1.first())
            .subscribe(function (movimentos) {
            _this.movimentos = movimentos;
            _this.display = true;
        });
        // get our data every subsequent 30 seconds
        // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
        IntervalObservable_1.IntervalObservable.create(30000)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () {
            _this._movimentoService.getMovimentos(_this.id)
                .subscribe(function (movimentos) {
                _this.movimentos = movimentos;
            });
        });
    };
    MovimentoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._movimentoService.getMovimentos(this.id)
            .pipe(operators_1.first())
            .subscribe(function (movimentos) {
            _this.movimentos = movimentos;
            _this.display = true;
        });
    };
    MovimentoComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MovimentoComponent.prototype, "idProduto", void 0);
    MovimentoComponent = __decorate([
        core_1.Component({
            selector: 'app-movimento',
            templateUrl: './movimento.component.html',
            styleUrls: ['./movimento.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, movimento_service_1.MovimentoService])
    ], MovimentoComponent);
    return MovimentoComponent;
}());
exports.MovimentoComponent = MovimentoComponent;
//# sourceMappingURL=movimento.component.js.map