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
var IntervalObservable_1 = require("rxjs/observable/IntervalObservable");
var drawer_monitor_service_1 = require("./drawer-monitor.service");
var DrawerMonitorComponent = /** @class */ (function () {
    function DrawerMonitorComponent(sanitizer, _drawerMonitorService) {
        this._drawerMonitorService = _drawerMonitorService;
        this.onSelected = new core_1.EventEmitter();
        this.navToggle = new core_1.EventEmitter();
        this.listFilter = '';
        this.stateFlag = false;
    }
    // toggleImage(): void {
    //     this.showImage = !this.showImage;
    // }
    DrawerMonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._drawerMonitorService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
        IntervalObservable_1.IntervalObservable.create(90000)
            .subscribe(function () {
            _this._drawerMonitorService.getProducts()
                .subscribe(function (products) {
                _this.products = products;
            });
        });
    };
    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Lista de Produtos: ' + message;
    // }
    DrawerMonitorComponent.prototype.onSelect = function (product) {
        // console.log('Produto: ', product);
        this.onSelected.emit(product);
        this.navToggle.emit(true);
    };
    DrawerMonitorComponent.prototype.toggleState = function () {
        this.stateFlag = !this.stateFlag;
    };
    DrawerMonitorComponent.prototype.calculateClasses = function () {
        return {
            hamburger: true,
            'hamburger--squeeze': true,
            'is-active': this.stateFlag
        };
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DrawerMonitorComponent.prototype, "onSelected", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DrawerMonitorComponent.prototype, "navToggle", void 0);
    DrawerMonitorComponent = __decorate([
        core_1.Component({
            selector: 'app-drawer-monitor',
            templateUrl: './drawer-monitor.component.html',
            styleUrls: ['./drawer-monitor.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, drawer_monitor_service_1.DrawerMonitorService])
    ], DrawerMonitorComponent);
    return DrawerMonitorComponent;
}());
exports.DrawerMonitorComponent = DrawerMonitorComponent;
//# sourceMappingURL=drawer-monitor.component.js.map