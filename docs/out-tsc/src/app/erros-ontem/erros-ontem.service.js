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
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
var kendo_data_query_1 = require("@progress/kendo-data-query");
var ErrosOntemService = /** @class */ (function () {
    function ErrosOntemService(_http) {
        this._http = _http;
        this._totaisUrl = 'assets/dados/TOTAIS_ONTEM.json';
    }
    ErrosOntemService.prototype.getErros = function (id) {
        var getID = id;
        return this._http.get(this._totaisUrl)
            .pipe(operators_1.map(function (data) { return kendo_data_query_1.filterBy(data, {
            logic: 'and',
            filters: [
                { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
            ]
        }); }) // or any other operator
        );
        // .do(data => console.log('ACUMULADO: ' +  JSON.stringify(data)))
        // .catch(this.handleError);
    };
    ErrosOntemService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs_1.throwError(error || 'Server error');
    };
    ErrosOntemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ErrosOntemService);
    return ErrosOntemService;
}());
exports.ErrosOntemService = ErrosOntemService;
//# sourceMappingURL=erros-ontem.service.js.map