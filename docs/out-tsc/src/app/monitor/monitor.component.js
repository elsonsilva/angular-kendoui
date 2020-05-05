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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var drawer_monitor_service_1 = require("../drawer-monitor/drawer-monitor.service");
var alternador_service_1 = require("../shared/alternador.service");
var MonitorComponent = /** @class */ (function () {
    function MonitorComponent(sanitizer, _drawerMonitorService, dialog, _alternadorservice, router) {
        this._drawerMonitorService = _drawerMonitorService;
        this.dialog = dialog;
        this._alternadorservice = _alternadorservice;
        this.router = router;
        this.products = [];
        this.lista = [];
        this.stateFlag = false;
        this.i = 0;
        this.alive = true;
        this.btSpin = false;
    }
    MonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.i % 3) === 0) {
            console.log('DIV_2');
        }
        ;
        this.btSpin = this._alternadorservice.retornaSpin();
        console.log('ONINIT: ' + this._alternadorservice.retornaSpin());
        this._drawerMonitorService.getProducts()
            .subscribe(function (lista) {
            _this.lista = lista;
            _this.produtoSelecionado = _this.lista[_this._alternadorservice.retornaI()].Descricao_transacao;
            _this.idSelecionado = _this.lista[_this._alternadorservice.retornaI()].NU_TRANSACAO;
        });
    };
    MonitorComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogSettingsComponent, {
            // height: '250px',
            width: '450px'
            // , data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            //  this.animal = result;
        });
    };
    MonitorComponent.prototype.recebeProduto = function (titulo) {
        // console.log(titulo);
        this.produtoSelecionado = titulo.Descricao_transacao;
        this.idSelecionado = titulo.NU_TRANSACAO;
    };
    MonitorComponent.prototype.iterador = function () {
        var _this = this;
        this.i = 0;
        this.btSpin = true;
        // this.bt1 = this._alternadorservice.retornaSpin();
        this.produtoSelecionado = this.lista[0].Descricao_transacao;
        this.idSelecionado = this.lista[0].NU_TRANSACAO;
        for (this.i; this.i <= this.lista.length; this.i++) {
            setTimeout(function () {
                if (_this.i === (_this.lista.length)) {
                    _this.i = 0;
                    _this.iterador2();
                }
                else {
                    if (_this.alive) {
                        console.log('THIS i: ' + _this.i);
                        _this.produtoSelecionado = _this.lista[_this.i].Descricao_transacao;
                        _this.idSelecionado = _this.lista[_this.i].NU_TRANSACAO;
                        _this._alternadorservice.capturaId(_this.idSelecionado);
                    }
                }
                // console.log('TIME: ' + this.produtoSelecionado);
                // console.log('TIME: ' + i);
            }, 12000 * this.i);
        }
    };
    MonitorComponent.prototype.iterador2 = function () {
        var _this = this;
        if (this.alive) {
            this.btSpin = true;
            this.produtoSelecionado = this.lista[0].Descricao_transacao;
            this.idSelecionado = this.lista[0].NU_TRANSACAO;
            for (this.i; this.i <= this.lista.length; this.i++) {
                setTimeout(function () {
                    if (_this.i === (_this.lista.length)) {
                        // console.log('chama_teste2: ' + i);
                        _this.i = 0;
                        _this.iterador();
                    }
                    else {
                        if (_this.alive) {
                            _this.produtoSelecionado = _this.lista[_this.i].Descricao_transacao;
                            _this.idSelecionado = _this.lista[_this.i].NU_TRANSACAO;
                            _this._alternadorservice.capturaId(_this.idSelecionado);
                        }
                    }
                    // console.log('TIME: ' + this.produtoSelecionado);
                    // console.log('TIME: ' + i);
                }, 12000 * this.i);
            }
        }
    };
    // https://www.concretepage.com/angular-2/angular-4-ng-template-example
    MonitorComponent.prototype.stop = function (event) {
        this.btSpin = false;
        this.alive = false;
    };
    MonitorComponent.prototype.start = function (event) {
        this.alive = true;
    };
    MonitorComponent.prototype.toggleState = function () {
        this.stateFlag = !this.stateFlag;
    };
    MonitorComponent.prototype.closedState = function () {
        this.stateFlag = false;
    };
    MonitorComponent.prototype.calculateClasses = function () {
        return {
            hamburger: true,
            'hamburger--squeeze': true,
            'is-active': this.stateFlag
        };
    };
    MonitorComponent = __decorate([
        core_1.Component({
            selector: 'app-monitor',
            templateUrl: './monitor.component.html',
            styleUrls: ['./monitor.component.scss']
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer,
            drawer_monitor_service_1.DrawerMonitorService,
            material_1.MatDialog,
            alternador_service_1.AlternadorService,
            router_1.Router])
    ], MonitorComponent);
    return MonitorComponent;
}());
exports.MonitorComponent = MonitorComponent;
var DialogSettingsComponent = /** @class */ (function () {
    function DialogSettingsComponent(dialogRef, router, _alternadorservice, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this._alternadorservice = _alternadorservice;
        this.data = data;
        this.checked1 = false;
        this.checked2 = false;
        this.checked3 = false;
        this.spin = true;
    }
    DialogSettingsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogSettingsComponent.prototype.toggle1 = function () {
        this.checked1 = !this.checked1;
        console.log('TESTE1: ' + this.checked1);
    };
    DialogSettingsComponent.prototype.toggle2 = function () {
        this.checked2 = !this.checked2;
        console.log('TESTE2: ' + this.checked2);
    };
    DialogSettingsComponent.prototype.toggle3 = function () {
        this.checked3 = !this.checked3;
        console.log('TESTE3: ' + this.checked3);
    };
    DialogSettingsComponent.prototype.onOK = function () {
        this.dialogRef.close();
        this.spin = false;
        this.router.navigate(['monitor']);
        // this.iterador();
        console.log('SPIN: ' + this.spin);
        this._alternadorservice.captura1(this.checked1);
        this._alternadorservice.captura2(this.checked2);
        this._alternadorservice.captura3(this.checked3);
        this._alternadorservice.capturaSpin(this.spin);
    };
    DialogSettingsComponent = __decorate([
        core_1.Component({
            selector: 'dialog-settings-component',
            templateUrl: 'dialog-settings-component.html',
        }),
        __param(3, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            router_1.Router,
            alternador_service_1.AlternadorService, Object])
    ], DialogSettingsComponent);
    return DialogSettingsComponent;
}());
exports.DialogSettingsComponent = DialogSettingsComponent;
//# sourceMappingURL=monitor.component.js.map