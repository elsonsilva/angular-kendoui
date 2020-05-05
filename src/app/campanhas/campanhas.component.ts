import { Component, ViewChild, ElementRef, OnInit, OnDestroy, OnChanges, AfterViewInit, Inject  } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { first, takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IDrawer } from '../drawer-monitor/drawer';

import { ICamps } from './camps';
import { CampanhasService } from './campanhas.service';
import { AlternadorService } from '../shared/alternador.service';

import { homeTransition, fromleftTransition, rightleftTransition } from '../shared/animations';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.component.html',
  styleUrls: ['./campanhas.component.scss'],
  animations: [ rightleftTransition ],
  host: {
    '[@rightleftTransition]': ''
  }
})
export class CampanhasComponent implements OnInit, OnDestroy, AfterViewInit {

  toperrosdia: ICamps[] = [];

  toperrosdia0: ICamps;
  data_dia0: string;
  desc_dia0: string;
  qtd_dia0: number;

  lista: IDrawer[] = [];
  errorMessage: string;
  data: boolean;
  public btSpin: boolean;

  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  constructor(sanitizer: DomSanitizer,
    private _campanhasService: CampanhasService,
    private router: Router,
    public dialog: MatDialog,
    public _alternadorservice: AlternadorService) {
    this.display = false;
    this.alive = true;
  }

  ngOnInit() {

    this.btSpin = this._alternadorservice.retornaSpin()
    // console.log('GRANDES_SPIN: ' + this.btSpin)
     // this._alternadorservice.capturaTela(this.tela);
    //  this._campanhasService.getDia()
    //    .pipe(
    //      first()
    //    )
    //    .subscribe(() => {
    //     this._campanhasService.getDia()
    //       .subscribe(toperrosdia => {
    //         this.toperrosdia = toperrosdia;
    //         this.toperrosdia0 = this.toperrosdia[0];
    //         this.data_dia0 = this.toperrosdia0.POSICAO_DT;
    //         this.desc_dia0 = this.toperrosdia0.DESCRICAO;
    //         this.qtd_dia0 = this.toperrosdia0.QTD;

    //       });
    //   });
 
    //  IntervalObservable.create(15000)
    //    .pipe(
    //      takeWhile(() => this.alive)
    //    )
    //    .subscribe(() => {
    //      this._campanhasService.getDia()
    //        .subscribe(toperrosdia => {
    //         this.toperrosdia = toperrosdia;
    //         this.toperrosdia0 = this.toperrosdia[0];
    //         this.data_dia0 = this.toperrosdia0.POSICAO_DT;
    //         this.desc_dia0 = this.toperrosdia0.DESCRICAO;
    //         this.qtd_dia0 = this.toperrosdia0.QTD;

    //        });
    //    });
    
  }


  openDialog(): void {
    // var index = this.lista.findIndex(x => x.NU_TRANSACAO == this.idSelecionado);
   // this._alternadorservice.capturaI(index);

    let dialogRef = this.dialog.open(DialogSettingsComponentCampanhas, {
      // height: '250px',
      width: '450px'
      // , data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.alive = true;

      this.ngOnInit();
    });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

  ngAfterViewInit(): void {

    if (this.btSpin) {

      setTimeout(() => {
        this.mudapagina();
      }, 10000);
    }
  }

  gohome() {
    this.router.navigate(['/monitor']);
  }

  mudapagina() {

    setTimeout(() => {
      this.router.navigate(['monitor']);
    }, 10000);
  }

}


@Component({
  selector: 'dialog-settings-component-campanhas',
  templateUrl: 'dialog-settings-component.html',
})
export class DialogSettingsComponentCampanhas {

  checked1 = false;
  checked2 = false;
  checked3 = false;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingsComponentCampanhas>,
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
  //  console.log('TESTE1: ' + this.checked1);
  }

  toggle2() {
    this.checked2 = !this.checked2;
  //  console.log('TESTE2: ' + this.checked2);
  }

  toggle3() {
    this.checked3 = !this.checked3;
  //  console.log('TESTE3: ' + this.checked3);
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

