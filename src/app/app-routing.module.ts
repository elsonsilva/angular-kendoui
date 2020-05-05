import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { MonitorComponent } from './monitor/monitor.component';
import { GrandesNumerosComponent } from './grandes-numeros/grandes-numeros.component';
import { MonitorOntemComponent } from './monitor-ontem/monitor-ontem.component';
import { TopErrosComponent } from './top-erros/top-erros.component';
import { MonitorMesComponent } from './monitor-mes/monitor-mes.component';
import { MonitorAnoComponent } from './monitor-ano/monitor-ano.component';

const routes: Routes = [];

// ROUTING
const appRoutes: Routes = [
  { path: '', component: MonitorComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'monitor-ontem',      component: MonitorOntemComponent },
  { path: 'monitor-mes',      component: MonitorMesComponent },
  { path: 'monitor-ano',      component: MonitorAnoComponent },
  { path: 'grandesnumeros',      component: GrandesNumerosComponent  },
  { path: 'top-erros',      component: TopErrosComponent },
  // { path: '/', component: AppComponent },
  // { path: 'monitor/:id',      component: monitor },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: MonitorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

