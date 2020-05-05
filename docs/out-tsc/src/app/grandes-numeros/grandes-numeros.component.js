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
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var operators_1 = require("rxjs/operators");
var IntervalObservable_1 = require("rxjs/observable/IntervalObservable");
var grandes_numeros_service_1 = require("./grandes-numeros.service");
var alternador_service_1 = require("../shared/alternador.service");
var GrandesNumerosComponent = /** @class */ (function () {
    // when OnDestroy is called.
    function GrandesNumerosComponent(sanitizer, _grandesnumerosService, router, _alternadorservice) {
        this._grandesnumerosService = _grandesnumerosService;
        this.router = router;
        this._alternadorservice = _alternadorservice;
        this.grandes = [];
        this.display = false;
        this.alive = true;
    }
    GrandesNumerosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get our data immediately when the component inits
        console.log('GRANDES: ' + this._alternadorservice.retorna1());
        this._grandesnumerosService.getGrandes()
            .pipe(operators_1.first())
            .subscribe(function (grandes) {
            _this.grandes = grandes;
            _this.display = true;
        });
        IntervalObservable_1.IntervalObservable.create(1800000)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () {
            _this._grandesnumerosService.getGrandes()
                .subscribe(function (grandes) {
                _this.grandes = grandes;
            });
        });
    };
    GrandesNumerosComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // get our data immediately when the component inits
        this._grandesnumerosService.getGrandes()
            .pipe(operators_1.first())
            .subscribe(function (grandes) {
            _this.grandes = grandes;
            _this.display = true;
        });
    };
    GrandesNumerosComponent.prototype.ngOnDestroy = function () {
        this.alive = false; // switches your IntervalObservable off
    };
    GrandesNumerosComponent.prototype.gohome = function () {
        this.router.navigate(['/monitor']);
    };
    GrandesNumerosComponent.prototype.scroll = function (el) {
        el.scrollIntoView({ behavior: "smooth" });
    };
    GrandesNumerosComponent = __decorate([
        core_1.Component({
            selector: 'app-grandes-numeros',
            templateUrl: './grandes-numeros.component.html',
            styleUrls: ['./grandes-numeros.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer,
            grandes_numeros_service_1.GrandesNumerosService,
            router_1.Router,
            alternador_service_1.AlternadorService])
    ], GrandesNumerosComponent);
    return GrandesNumerosComponent;
}());
exports.GrandesNumerosComponent = GrandesNumerosComponent;
//# sourceMappingURL=grandes-numeros.component.js.map