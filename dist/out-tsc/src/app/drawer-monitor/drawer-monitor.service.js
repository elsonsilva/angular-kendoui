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
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
// import { Response } from '@angular/http';
var http_1 = require("@angular/common/http");
// import { map, retry, do, catch, throw } from 'rxjs/operators';
var operators_1 = require("rxjs/operators");
// import { AsyncLocalStorage } from 'angular-async-local-storage';
// @Injectable()
// export class YourService {
//   constructor(protected localStorage: AsyncLocalStorage) {}
// }
var DrawerMonitorService = /** @class */ (function () {
    function DrawerMonitorService(_http) {
        this._http = _http;
        this._productUrl = 'assets/dados/TRANSACOES.json';
    }
    DrawerMonitorService.prototype.getProducts = function () {
        return this._http.get(this._productUrl);
        // .do(data => console.log('All: ' +  JSON.stringify(data)))
        // .catchError(this.handleError);
    };
    DrawerMonitorService.prototype.getProduct = function (id) {
        return this.getProducts()
            .pipe(operators_1.map(function (products) { return products.find(function (p) { return p.NU_TRANSACAO === id; }); })); // or any other operator
    };
    DrawerMonitorService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs_1.throwError(error || 'Server error');
    };
    DrawerMonitorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DrawerMonitorService);
    return DrawerMonitorService;
}());
exports.DrawerMonitorService = DrawerMonitorService;
//# sourceMappingURL=drawer-monitor.service.js.map