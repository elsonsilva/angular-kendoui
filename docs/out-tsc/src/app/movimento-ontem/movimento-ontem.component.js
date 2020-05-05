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
var movimento_ontem_service_1 = require("./movimento-ontem.service");
// import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
var MovimentoOntemComponent = /** @class */ (function () {
    // when OnDestroy is called.
    function MovimentoOntemComponent(sanitizer, _movimentoOntemService) {
        this._movimentoOntemService = _movimentoOntemService;
        this.movimentos = [];
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    MovimentoOntemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._movimentoOntemService.getMovimentosOntem(this.id)
            .pipe(operators_1.first())
            .subscribe(function (movimentos) {
            _this.movimentos = movimentos;
            _this.display = true;
        });
        // get our data every subsequent 30 seconds
        // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
        // IntervalObservable.create(30000)
        // .pipe(
        //   takeWhile(() => this.alive)
        //  )
        //   .subscribe(() => {
        //     this._movimentoService.getMovimentos(this.id)
        //       .subscribe(movimentos => {
        //         this.movimentos = movimentos;
        //       });
        //   });
    };
    MovimentoOntemComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._movimentoOntemService.getMovimentosOntem(this.id)
            .pipe(operators_1.first())
            .subscribe(function (movimentos) {
            _this.movimentos = movimentos;
            _this.display = true;
        });
    };
    MovimentoOntemComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MovimentoOntemComponent.prototype, "idProduto", void 0);
    MovimentoOntemComponent = __decorate([
        core_1.Component({
            selector: 'app-movimento-ontem',
            templateUrl: './movimento-ontem.component.html',
            styleUrls: ['./movimento-ontem.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, movimento_ontem_service_1.MovimentoOntemService])
    ], MovimentoOntemComponent);
    return MovimentoOntemComponent;
}());
exports.MovimentoOntemComponent = MovimentoOntemComponent;
//# sourceMappingURL=movimento-ontem.component.js.map