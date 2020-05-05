"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DrawerFilterPipe = /** @class */ (function () {
    function DrawerFilterPipe() {
    }
    DrawerFilterPipe.prototype.transform = function (value, filter) {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(function (product) {
            return product.Descricao_transacao.toLocaleLowerCase().indexOf(filter) !== -1;
        }) : value;
    };
    DrawerFilterPipe = __decorate([
        core_1.Pipe({
            name: 'drawerFilter'
        })
    ], DrawerFilterPipe);
    return DrawerFilterPipe;
}());
exports.DrawerFilterPipe = DrawerFilterPipe;
//# sourceMappingURL=drawer-filter.pipe.js.map