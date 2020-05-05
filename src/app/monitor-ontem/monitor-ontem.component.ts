import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IDrawer } from '../drawer-monitor/drawer';
import { DrawerMonitorService } from '../drawer-monitor/drawer-monitor.service';

import { AlternadorService } from '../shared/alternador.service';

@Component({
  selector: 'app-monitor-ontem',
  templateUrl: './monitor-ontem.component.html',
  styleUrls: ['./monitor-ontem.component.scss']
})
export class MonitorOntemComponent implements OnInit {

  products: IDrawer[] = [];
  lista: IDrawer[] = [];
  errorMessage: string;
  private alive: boolean;
  public btSpin: boolean;
  stateFlag: boolean = false;
  private tela: number = 1;
  public x: any;

  titulo: any;
  public produtoSelecionado: string;
  public idSelecionado: number;

  constructor(sanitizer: DomSanitizer,
    private _drawerMonitorService: DrawerMonitorService,
    public dialog: MatDialog,
    public _alternadorservice: AlternadorService,
    private router: Router) {
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    this.alive = true;
    // this.btSpin = false;
  }

  ngOnInit(): void {
    this.btSpin = this._alternadorservice.retornaSpin();
   // console.log('ONINIT_SPIN: ' + this._alternadorservice.retornaSpin());
   // console.log('ONINIT_I: ' + this._alternadorservice.retornaI());

    this._alternadorservice.capturaTela(this.tela);

    this._drawerMonitorService.getProducts()
      // .first()
      .subscribe((lista) => {
        this.lista = lista;
        this.produtoSelecionado = this.lista[this._alternadorservice.retornaI()].Descricao_transacao;
        this.idSelecionado = this.lista[this._alternadorservice.retornaI()].NU_TRANSACAO;
      });

    if (this.btSpin) {
      this.iterador();
    };
  }

  openDialog(): void {
    var index = this.lista.findIndex(x => x.NU_TRANSACAO == this.idSelecionado);
    this._alternadorservice.capturaI(index);

    let dialogRef = this.dialog.open(DialogSettingsComponentOntem, {
      // height: '250px',
      width: '450px'
      // , data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.alive = true;

      this.ngOnInit();
    });
  }


  recebeProduto(titulo) {
    // console.log(titulo);
    this.produtoSelecionado = titulo.Descricao_transacao;
    this.idSelecionado = titulo.NU_TRANSACAO;
    var index = this.lista.findIndex(x => x.NU_TRANSACAO == this.idSelecionado);
    this._alternadorservice.capturaI(index);
    this.btSpin = false;
    this._alternadorservice.capturaSpin(this.btSpin);
   // console.log("recebeProduto: " + index);
  }


  iterador(): void {
  //  console.log('iterador ' + this.btSpin + ' ' + this.alive);
    IntervalObservable.create(10000)
      .pipe(
        takeWhile(() => this.btSpin && this.alive)
      )
      .subscribe(() => {

        var index: number = this.lista.findIndex(x => x.NU_TRANSACAO == this.idSelecionado);

        if (index == -1) {
        //  console.log('index: ' + index);
          index = this._alternadorservice.retornaI();
          this._alternadorservice.capturaI(index);
          this.produtoSelecionado = this.lista[this._alternadorservice.retornaI()].Descricao_transacao;
          this.idSelecionado = this.lista[this._alternadorservice.retornaI()].NU_TRANSACAO;
        } else


        if (this._alternadorservice.retorna1()) {
          this._alternadorservice.capturaI(index);
          this.router.navigate(['monitor-mes']);
          this.alive = false;
            } 

        this.produtoSelecionado = this.lista[this._alternadorservice.retornaI()].Descricao_transacao;
        this.idSelecionado = this.lista[this._alternadorservice.retornaI()].NU_TRANSACAO;

      });
  }

  // https://www.concretepage.com/angular-2/angular-4-ng-template-example

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

  stop(event): void {

    this.btSpin = false;
    this.alive = false;
    this._alternadorservice.capturaSpin(this.btSpin);
  }

  start(event): void {
    this.alive = true;
    this.btSpin = true;
    this._alternadorservice.capturaSpin(this.btSpin);
  }

  toggleState() {
    this.stateFlag = !this.stateFlag;
  }

  closedState() {
    this.stateFlag = false;
  }

  calculateClasses() {
    return {
      hamburger: true,
      'hamburger--squeeze': true,
      'is-active': this.stateFlag
    };
  }
}

@Component({
  selector: 'dialog-settings-component-ontem',
  templateUrl: 'dialog-settings-component.html',
})
export class DialogSettingsComponentOntem {

  checked1 = false;
  checked2 = false;
  checked3 = false;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingsComponentOntem>,
    private router: Router,
    public _alternadorservice: AlternadorService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this._alternadorservice.captura1(false);
    this._alternadorservice.captura2(false);
    this._alternadorservice.captura3(false);
    this._alternadorservice.capturaSpin(false);
    this.dialogRef.close();
  }

  toggle1() {
    this.checked1 = !this.checked1;
   // console.log('TESTE1: ' + this.checked1);
  }

  toggle2() {
    this.checked2 = !this.checked2;
   // console.log('TESTE2: ' + this.checked2);
  }

  toggle3() {
    this.checked3 = !this.checked3;
   // console.log('TESTE3: ' + this.checked3);
  }

  onOK() {
    // this._alternadorservice.capturaI(0);
    this._alternadorservice.captura1(this.checked1);
    this._alternadorservice.captura2(this.checked2);
    this._alternadorservice.captura3(this.checked3);
    this._alternadorservice.capturaSpin(true);
    // this.router.navigate(['monitor']); 
    this.dialogRef.close();
  }

}
