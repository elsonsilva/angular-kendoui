"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ANGULAR
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// ANGULAR MATERIAL
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
// import {FlexLayoutModule} from '@angular/flex-layout';
// ANGULAR GESTURES
require("hammerjs");
// FONT AWESOME
var angular_font_awesome_1 = require("angular-font-awesome");
// KENDO UI
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var kendo_angular_charts_1 = require("@progress/kendo-angular-charts");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
// import { filterBy } from '@progress/kendo-data-query';
require("@progress/kendo-angular-intl/locales/pt/all");
require("@progress/kendo-angular-intl/locales/pt/calendar");
// MODULES
var app_routing_module_1 = require("./app-routing.module");
// ENVIRONMENT
var environment_1 = require("../environments/environment");
// PWA
var service_worker_1 = require("@angular/service-worker");
// COMPONETS
var app_component_1 = require("./app.component");
var landing_component_1 = require("./landing/landing.component");
var monitor_component_1 = require("./monitor/monitor.component");
var totais_dia_component_1 = require("./totais/totais-dia.component");
var donut_component_1 = require("./donut/donut.component");
var donut_center_component_1 = require("./donut/donut-center.component");
var movimento_component_1 = require("./movimento/movimento.component");
var acumulado_component_1 = require("./acumulado/acumulado.component");
var subtitulo_component_1 = require("./subtitulo/subtitulo.component");
var drawer_monitor_component_1 = require("./drawer-monitor/drawer-monitor.component");
var erros_component_1 = require("./erros/erros.component");
var subtitulo_ontem_component_1 = require("./subtitulo-ontem/subtitulo-ontem.component");
var movimento_ontem_component_1 = require("./movimento-ontem/movimento-ontem.component");
var totais_ontem_component_1 = require("./totais-ontem/totais-ontem.component");
var donut_ontem_component_1 = require("./donut-ontem/donut-ontem.component");
var donut_ontem_center_component_1 = require("./donut-ontem/donut-ontem-center.component");
var erros_ontem_component_1 = require("./erros-ontem/erros-ontem.component");
var acumulado_ontem_component_1 = require("./acumulado-ontem/acumulado-ontem.component");
var grandes_numeros_component_1 = require("./grandes-numeros/grandes-numeros.component");
// SERVICES
var totais_dia_service_1 = require("./totais/totais-dia.service");
var donut_service_1 = require("./donut/donut.service");
var donut_center_service_1 = require("./donut/donut-center.service");
var movimento_service_1 = require("./movimento/movimento.service");
var acumulado_service_1 = require("./acumulado/acumulado.service");
var subtitulo_service_1 = require("./subtitulo/subtitulo.service");
var drawer_monitor_service_1 = require("./drawer-monitor/drawer-monitor.service");
var erros_service_1 = require("./erros/erros.service");
var subtitulo_ontem_service_1 = require("./subtitulo-ontem/subtitulo-ontem.service");
var movimento_ontem_service_1 = require("./movimento-ontem/movimento-ontem.service");
var totais_ontem_service_1 = require("./totais-ontem/totais-ontem.service");
var donut_ontem_service_1 = require("./donut-ontem/donut-ontem.service");
var donut_ontem_center_service_1 = require("./donut-ontem/donut-ontem-center.service");
var erros_ontem_service_1 = require("./erros-ontem/erros-ontem.service");
var acumulado_ontem_service_1 = require("./acumulado-ontem/acumulado-ontem.service");
var grandes_numeros_service_1 = require("./grandes-numeros/grandes-numeros.service");
// PIPES
var drawer_filter_pipe_1 = require("./drawer-monitor/drawer-filter.pipe");
// PT-BR
var common_1 = require("@angular/common");
var pt_1 = require("@angular/common/locales/pt");
common_1.registerLocaleData(pt_1.default);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                // MyDashboardComponent,
                monitor_component_1.DialogSettingsComponent,
                totais_dia_component_1.TotaisDiaComponent,
                donut_component_1.DonutComponent,
                donut_center_component_1.DonutCenterComponent,
                movimento_component_1.MovimentoComponent,
                acumulado_component_1.AcumuladoComponent,
                subtitulo_component_1.SubtituloComponent,
                drawer_monitor_component_1.DrawerMonitorComponent,
                drawer_filter_pipe_1.DrawerFilterPipe,
                monitor_component_1.MonitorComponent,
                landing_component_1.LandingComponent,
                erros_component_1.ErrosComponent,
                subtitulo_ontem_component_1.SubtituloOntemComponent,
                movimento_ontem_component_1.MovimentoOntemComponent,
                totais_ontem_component_1.TotaisOntemComponent,
                donut_ontem_component_1.DonutOntemComponent,
                donut_ontem_center_component_1.DonutOntemCenterComponent,
                erros_ontem_component_1.ErrosOntemComponent,
                acumulado_ontem_component_1.AcumuladoOntemComponent,
                grandes_numeros_component_1.GrandesNumerosComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                // FlexLayoutModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_charts_1.ChartsModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCheckboxModule,
                material_1.MatToolbarModule,
                material_1.MatCardModule,
                material_1.MatTooltipModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatSidenavModule,
                material_1.MatTabsModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatDialogModule,
                // AsyncLocalStorageModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                kendo_angular_intl_1.IntlModule,
                app_routing_module_1.AppRoutingModule,
                service_worker_1.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment_1.environment.production })
            ],
            entryComponents: [
                monitor_component_1.DialogSettingsComponent
            ],
            providers: [
                totais_dia_service_1.TotaisDiaService,
                donut_service_1.DonutService,
                donut_center_service_1.DonutCenterService,
                movimento_service_1.MovimentoService,
                acumulado_service_1.AcumuladoService,
                subtitulo_service_1.SubtituloService,
                drawer_monitor_service_1.DrawerMonitorService,
                erros_service_1.ErrosService,
                subtitulo_ontem_service_1.SubtituloOntemService,
                movimento_ontem_service_1.MovimentoOntemService,
                totais_ontem_service_1.TotaisOntemService,
                donut_ontem_service_1.DonutOntemService,
                donut_ontem_center_service_1.DonutOntemCenterService,
                erros_ontem_service_1.ErrosOntemService,
                acumulado_ontem_service_1.AcumuladoOntemService,
                grandes_numeros_service_1.GrandesNumerosService,
                { provide: core_1.LOCALE_ID, useValue: 'pt-BR' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map