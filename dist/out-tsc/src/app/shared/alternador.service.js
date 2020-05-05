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
var AlternadorService = /** @class */ (function () {
    function AlternadorService() {
        this.alterna1 = false;
        this.alterna2 = false;
        this.alterna3 = false;
        this.spin = false;
        this.idSelecionado = 0;
        this.i = 3;
    }
    AlternadorService.prototype.captura1 = function (checked1) {
        this.alterna1 = checked1;
        console.log('CAPTURA1: ' + this.alterna1);
    };
    AlternadorService.prototype.retorna1 = function () {
        return this.alterna1;
    };
    AlternadorService.prototype.captura2 = function (checked2) {
        this.alterna2 = checked2;
        console.log('CAPTURA2: ' + this.alterna2);
    };
    AlternadorService.prototype.retorna2 = function () {
        return this.alterna2;
    };
    AlternadorService.prototype.captura3 = function (checked3) {
        this.alterna3 = checked3;
        console.log('CAPTURA3: ' + this.alterna3);
    };
    AlternadorService.prototype.retorna3 = function () {
        return this.alterna3;
    };
    AlternadorService.prototype.capturaSpin = function (spin) {
        this.spin = spin;
        console.log('SPIN: ' + this.spin);
    };
    AlternadorService.prototype.retornaSpin = function () {
        return this.spin;
    };
    AlternadorService.prototype.capturaId = function (idSelecionado) {
        this.idSelecionado = idSelecionado;
        console.log('ID_SELECIONADO: ' + this.idSelecionado);
    };
    AlternadorService.prototype.retornaId = function () {
        return this.idSelecionado;
    };
    AlternadorService.prototype.capturaI = function (i) {
        this.i = i;
        console.log('ID_SELECIONADO: ' + this.i);
    };
    AlternadorService.prototype.retornaI = function () {
        return this.i;
    };
    AlternadorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlternadorService);
    return AlternadorService;
}());
exports.AlternadorService = AlternadorService;
//# sourceMappingURL=alternador.service.js.map