// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule, Routes } from '@angular/router';
// import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

// ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatTooltipModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatTabsModule,
        MatListModule,
        MatMenuModule,
        MatDialogModule,
        MatDividerModule} from '@angular/material';
// import {FlexLayoutModule} from '@angular/flex-layout';

// ANGULAR GESTURES
import 'hammerjs';

// FONT AWESOME
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// KENDO UI
import { IntlModule } from '@progress/kendo-angular-intl';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
// import { filterBy } from '@progress/kendo-data-query';
import '@progress/kendo-angular-intl/locales/pt/all';
import '@progress/kendo-angular-intl/locales/pt/calendar';

// MODULES
import { AppRoutingModule } from './app-routing.module';

// ENVIRONMENT
import { environment } from '../environments/environment';

// PWA
import { ServiceWorkerModule } from '@angular/service-worker';

// COMPONETS
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { DrawerMonitorComponent } from './drawer-monitor/drawer-monitor.component';

import { MonitorComponent, DialogSettingsComponent } from './monitor/monitor.component';
import { MonitorOntemComponent, DialogSettingsComponentOntem } from './monitor-ontem/monitor-ontem.component';
import { MonitorMesComponent, DialogSettingsComponentMes } from './monitor-mes/monitor-mes.component';
import { MonitorAnoComponent, DialogSettingsComponentAno } from './monitor-ano/monitor-ano.component';

import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { SubtituloOntemComponent } from './subtitulo-ontem/subtitulo-ontem.component';
import { SubtituloMesComponent } from './subtitulo-mes/subtitulo-mes.component';
import { SubtituloAnoComponent } from './subtitulo-ano/subtitulo-ano.component';

import { MovimentoComponent } from './movimento/movimento.component';
import { MovimentoOntemComponent } from './movimento-ontem/movimento-ontem.component';
import { MovimentoMesComponent } from './movimento-mes/movimento-mes.component';
import { MovimentoAnoComponent } from './movimento-ano/movimento-ano.component';

import { TotaisDiaComponent } from './totais/totais-dia.component';
import { TotaisOntemComponent } from './totais-ontem/totais-ontem.component';
import { TotaisMesComponent } from './totais-mes/totais-mes.component';
import { TotaisAnoComponent } from './totais-ano/totais-ano.component';

import { DonutComponent } from './donut/donut.component';
import { DonutOntemComponent } from './donut-ontem/donut-ontem.component';
import { DonutMesComponent } from './donut-mes/donut-mes.component';
import { DonutAnoComponent } from './donut-ano/donut-ano.component';

import { DonutCenterComponent } from './donut/donut-center.component';
import { DonutOntemCenterComponent } from './donut-ontem/donut-ontem-center.component';
import { DonutMesCenterComponent } from './donut-mes/donut-mes-center.component';
import { DonutAnoCenterComponent } from './donut-ano/donut-ano-center.component';

import { ErrosComponent } from './erros/erros.component';
import { ErrosOntemComponent } from './erros-ontem/erros-ontem.component';
import { ErrosMesComponent } from './erros-mes/erros-mes.component';
import { ErrosAnoComponent } from './erros-ano/erros-ano.component';

import { AcumuladoComponent } from './acumulado/acumulado.component';
import { AcumuladoOntemComponent } from './acumulado-ontem/acumulado-ontem.component';
import { AcumuladoMesComponent } from './acumulado-mes/acumulado-mes.component';
import { AcumuladoAnoComponent } from './acumulado-ano/acumulado-ano.component';

import { GrandesNumerosComponent, DialogSettingsComponentGrandesNumeros  } from './grandes-numeros/grandes-numeros.component';

import { TopErrosComponent, DialogSettingsComponentTopErros } from './top-erros/top-erros.component';

import { CampanhasComponent, DialogSettingsComponentCampanhas } from './campanhas/campanhas.component';

// SERVICES
import { DrawerMonitorService } from './drawer-monitor/drawer-monitor.service';

import { SubtituloService } from './subtitulo/subtitulo.service';
import { SubtituloOntemService } from './subtitulo-ontem/subtitulo-ontem.service';
import { SubtituloMesService } from './subtitulo-mes/subtitulo-mes.service';
import { SubtituloAnoService } from './subtitulo-ano/subtitulo-ano.service';

import { MovimentoService } from './movimento/movimento.service';
import { MovimentoOntemService } from './movimento-ontem/movimento-ontem.service';
import { MovimentoMesService } from './movimento-mes/movimento-mes.service';
import { MovimentoAnoService } from './movimento-ano/movimento-ano.service';

import { TotaisDiaService} from './totais/totais-dia.service';
import { TotaisOntemService } from './totais-ontem/totais-ontem.service';
import { TotaisMesService } from './totais-mes/totais-mes.service';
import { TotaisAnoService } from './totais-ano/totais-ano.service';

import { DonutService } from './donut/donut.service';
import { DonutOntemService } from './donut-ontem/donut-ontem.service';
import { DonutMesService } from './donut-mes/donut-mes.service';
import { DonutAnoService } from './donut-ano/donut-ano.service';

import { DonutCenterService } from './donut/donut-center.service';
import { DonutOntemCenterService } from './donut-ontem/donut-ontem-center.service';
import { DonutMesCenterService } from './donut-mes/donut-mes-center.service';
import { DonutAnoCenterService } from './donut-ano/donut-ano-center.service';

import { ErrosService } from './erros/erros.service';
import { ErrosOntemService } from './erros-ontem/erros-ontem.service';
import { ErrosMesService } from './erros-mes/erros-mes.service';
import { ErrosAnoService } from './erros-ano/erros-ano.service';

import { AcumuladoService } from './acumulado/acumulado.service';
import { AcumuladoOntemService } from './acumulado-ontem/acumulado-ontem.service';
import { AcumuladoMesService } from './acumulado-mes/acumulado-mes.service';
import { AcumuladoAnoService } from './acumulado-ano/acumulado-ano.service';

import { GrandesNumerosService } from './grandes-numeros/grandes-numeros.service';
import { TopErrosService } from './top-erros/top-erros.service';
import { CampanhasService } from './campanhas/campanhas.service';

// PIPES
import { DrawerFilterPipe } from './drawer-monitor/drawer-filter.pipe';

// PT-BR
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,

    DrawerMonitorComponent,
    DrawerFilterPipe,

    DialogSettingsComponent,
    DialogSettingsComponentOntem,
    DialogSettingsComponentMes,
    DialogSettingsComponentAno,
    DialogSettingsComponentGrandesNumeros,
    DialogSettingsComponentTopErros,
    DialogSettingsComponentCampanhas,

    MonitorComponent,
    MonitorOntemComponent,
    MonitorMesComponent,
    MonitorAnoComponent,

    SubtituloComponent,
    SubtituloOntemComponent,
    SubtituloMesComponent,
    SubtituloAnoComponent,

    MovimentoComponent,
    MovimentoOntemComponent,
    MovimentoMesComponent,
    MovimentoAnoComponent,

    TotaisDiaComponent,
    TotaisOntemComponent,
    TotaisMesComponent,
    TotaisAnoComponent,

    DonutComponent,
    DonutOntemComponent,
    DonutMesComponent,
    DonutAnoComponent,

    DonutCenterComponent,
    DonutOntemCenterComponent,
    DonutMesCenterComponent,
    DonutAnoCenterComponent,

    ErrosComponent,
    ErrosOntemComponent,
    ErrosMesComponent,
    ErrosAnoComponent,

    AcumuladoComponent,
    AcumuladoOntemComponent,
    AcumuladoMesComponent,
    AcumuladoAnoComponent,
     
    GrandesNumerosComponent,
    TopErrosComponent,
    CampanhasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // FlexLayoutModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ChartsModule,
    GridModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    // AsyncLocalStorageModule,
    AngularFontAwesomeModule,
    IntlModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })

  ],
  entryComponents: [
    DialogSettingsComponent, 
    DialogSettingsComponentOntem, 
    DialogSettingsComponentMes, 
    DialogSettingsComponentAno,
    DialogSettingsComponentGrandesNumeros,
    DialogSettingsComponentTopErros,
    DialogSettingsComponentCampanhas
  ],
  providers: [
    DrawerMonitorService,

    SubtituloService,
    SubtituloOntemService,
    SubtituloMesService,
    SubtituloAnoService,

    MovimentoService,
    MovimentoOntemService,
    MovimentoMesService,
    MovimentoAnoService,
    
    TotaisDiaService,
    TotaisOntemService,
    TotaisMesService,
    TotaisAnoService,

    DonutService,
    DonutOntemService,
    DonutMesService,
    DonutAnoService,

    DonutCenterService,
    DonutOntemCenterService,
    DonutMesCenterService,
    DonutAnoCenterService,

    ErrosService,
    ErrosOntemService,
    ErrosMesService,
    ErrosAnoService,

    AcumuladoService,
    AcumuladoOntemService,
    AcumuladoMesService,
    AcumuladoAnoService,
 
    GrandesNumerosService,
    TopErrosService,
    CampanhasService,

    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
