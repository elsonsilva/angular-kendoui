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
var subtitulo_ontem_service_1 = require("./subtitulo-ontem.service");
var SubtituloOntemComponent = /** @class */ (function () {
    // when OnDestroy is called.
    function SubtituloOntemComponent(sanitizer, _subtituloOntemService) {
        this._subtituloOntemService = _subtituloOntemService;
        this.subtitulos = [];
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        this.display = false;
        this.alive = true;
    }
    SubtituloOntemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._subtituloOntemService.getSubtitulosOntem(this.id)
            .pipe(operators_1.first())
            .subscribe(function (subtitulos) {
            _this.subtitulos = subtitulos;
            _this.display = true;
        });
        // IntervalObservable.create(30000)
        // .pipe(
        //   takeWhile(() => this.alive)
        //  )
        // .subscribe(() => {
        //   this._subtituloService.getSubtitulos(this.id)
        //     .subscribe(subtitulos => {
        //       this.subtitulos = subtitulos;
        //     });
        // });
    };
    SubtituloOntemComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.id = this.idProduto;
        // get our data immediately when the component inits
        this._subtituloOntemService.getSubtitulosOntem(this.id)
            .pipe(operators_1.first())
            .subscribe(function (subtitulos) {
            _this.subtitulos = subtitulos;
            _this.display = true;
        });
    };
    SubtituloOntemComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SubtituloOntemComponent.prototype, "idProduto", void 0);
    SubtituloOntemComponent = __decorate([
        core_1.Component({
            selector: 'app-subtitulo-ontem',
            templateUrl: './subtitulo-ontem.component.html',
            styleUrls: ['./subtitulo-ontem.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, subtitulo_ontem_service_1.SubtituloOntemService])
    ], SubtituloOntemComponent);
    return SubtituloOntemComponent;
}());
exports.SubtituloOntemComponent = SubtituloOntemComponent;
//# sourceMappingURL=subtitulo-ontem.component.js.map