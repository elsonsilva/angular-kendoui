import { Component, ViewChild, ElementRef, OnInit, OnDestroy, OnChanges, AfterViewInit, Inject  } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { first, takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IDrawer } from '../drawer-monitor/drawer';

import { ITop } from './tops';
import { TopErrosService } from './top-erros.service';
import { AlternadorService } from '../shared/alternador.service';

import { homeTransition, fromleftTransition, rightleftTransition } from '../shared/animations';

@Component({
  selector: 'app-top-erros',
  templateUrl: './top-erros.component.html',
  styleUrls: ['./top-erros.component.scss'],
  animations: [ rightleftTransition ],
  host: {
    '[@rightleftTransition]': ''
  }
})
export class TopErrosComponent implements OnInit, OnDestroy, AfterViewInit {

  toperrosdia: ITop[] = [];

  toperrosdia0: ITop;
  data_dia0: string;
  desc_dia0: string;
  qtd_dia0: number;
  toperrosdia1: ITop;
  desc_dia1: string;
  qtd_dia1: number;
  toperrosdia2: ITop;
  desc_dia2: string;
  qtd_dia2: number;
  toperrosdia3: ITop;
  desc_dia3: string;
  qtd_dia3: number;
  toperrosdia4: ITop;
  desc_dia4: string;
  qtd_dia4: number;
  toperrosdia5: ITop;
  desc_dia5: string;
  qtd_dia5: number;
  toperrosdia6: ITop;
  desc_dia6: string;
  qtd_dia6: number;
  toperrosdia7: ITop;
  desc_dia7: string;
  qtd_dia7: number;
  toperrosdia8: ITop;
  desc_dia8: string;
  qtd_dia8: number;
  toperrosdia9: ITop;
  desc_dia9: string;
  qtd_dia9: number;

  toperrosmes: ITop[] = [];

  toperrosmes0: ITop;
  desc_mes0: string;
  qtd_mes0: number;
  toperrosmes1: ITop;
  desc_mes1: string;
  qtd_mes1: number;
  toperrosmes2: ITop;
  desc_mes2: string;
  qtd_mes2: number;
  toperrosmes3: ITop;
  desc_mes3: string;
  qtd_mes3: number;
  toperrosmes4: ITop;
  desc_mes4: string;
  qtd_mes4: number;
  toperrosmes5: ITop;
  desc_mes5: string;
  qtd_mes5: number;
  toperrosmes6: ITop;
  desc_mes6: string;
  qtd_mes6: number;
  toperrosmes7: ITop;
  desc_mes7: string;
  qtd_mes7: number;
  toperrosmes8: ITop;
  desc_mes8: string;
  qtd_mes8: number;
  toperrosmes9: ITop;
  desc_mes9: string;
  qtd_mes9: number;

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
    private _toperrosService: TopErrosService,
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
     this._toperrosService.getDia()
       .pipe(
         first()
       )
       .subscribe(() => {
        this._toperrosService.getDia()
          .subscribe(toperrosdia => {
            this.toperrosdia = toperrosdia;
            this.toperrosdia0 = this.toperrosdia[0];
            this.data_dia0 = this.toperrosdia0.POSICAO_DT;
            this.desc_dia0 = this.toperrosdia0.DESCRICAO;
            this.qtd_dia0 = this.toperrosdia0.QTD;
            this.toperrosdia1 = this.toperrosdia[1];
            this.desc_dia1 = this.toperrosdia1.DESCRICAO;
            this.qtd_dia1 = this.toperrosdia1.QTD;
            this.toperrosdia2 = this.toperrosdia[2];
            this.desc_dia2 = this.toperrosdia2.DESCRICAO;
            this.qtd_dia2 = this.toperrosdia2.QTD;
            this.toperrosdia3 = this.toperrosdia[3];
            this.desc_dia3 = this.toperrosdia3.DESCRICAO;
            this.qtd_dia3 = this.toperrosdia3.QTD;
            this.toperrosdia4 = this.toperrosdia[4];
            this.desc_dia4 = this.toperrosdia4.DESCRICAO;
            this.qtd_dia4 = this.toperrosdia4.QTD;
            this.toperrosdia5 = this.toperrosdia[5];
            this.desc_dia5 = this.toperrosdia5.DESCRICAO;
            this.qtd_dia5 = this.toperrosdia5.QTD;
            this.toperrosdia6 = this.toperrosdia[6];
            this.desc_dia6 = this.toperrosdia6.DESCRICAO;
            this.qtd_dia6 = this.toperrosdia6.QTD;
            this.toperrosdia7 = this.toperrosdia[7];
            this.desc_dia7 = this.toperrosdia7.DESCRICAO;
            this.qtd_dia7 = this.toperrosdia7.QTD;
            this.toperrosdia8 = this.toperrosdia[8];
            this.desc_dia8 = this.toperrosdia8.DESCRICAO;
            this.qtd_dia8 = this.toperrosdia8.QTD;
            this.toperrosdia9 = this.toperrosdia[9];
            this.desc_dia9 = this.toperrosdia9.DESCRICAO;
            this.qtd_dia9 = this.toperrosdia9.QTD;
          });
      });
 
     IntervalObservable.create(15000)
       .pipe(
         takeWhile(() => this.alive)
       )
       .subscribe(() => {
         this._toperrosService.getDia()
           .subscribe(toperrosdia => {
            this.toperrosdia = toperrosdia;
            this.toperrosdia0 = this.toperrosdia[0];
            this.data_dia0 = this.toperrosdia0.POSICAO_DT;
            this.desc_dia0 = this.toperrosdia0.DESCRICAO;
            this.qtd_dia0 = this.toperrosdia0.QTD;
            this.toperrosdia1 = this.toperrosdia[1];
            this.desc_dia1 = this.toperrosdia1.DESCRICAO;
            this.qtd_dia1 = this.toperrosdia1.QTD;
            this.toperrosdia2 = this.toperrosdia[2];
            this.desc_dia2 = this.toperrosdia2.DESCRICAO;
            this.qtd_dia2 = this.toperrosdia2.QTD;
            this.toperrosdia3 = this.toperrosdia[3];
            this.desc_dia3 = this.toperrosdia3.DESCRICAO;
            this.qtd_dia3 = this.toperrosdia3.QTD;
            this.toperrosdia4 = this.toperrosdia[4];
            this.desc_dia4 = this.toperrosdia4.DESCRICAO;
            this.qtd_dia4 = this.toperrosdia4.QTD;
            this.toperrosdia5 = this.toperrosdia[5];
            this.desc_dia5 = this.toperrosdia5.DESCRICAO;
            this.qtd_dia5 = this.toperrosdia5.QTD;
            this.toperrosdia6 = this.toperrosdia[6];
            this.desc_dia6 = this.toperrosdia6.DESCRICAO;
            this.qtd_dia6 = this.toperrosdia6.QTD;
            this.toperrosdia7 = this.toperrosdia[7];
            this.desc_dia7 = this.toperrosdia7.DESCRICAO;
            this.qtd_dia7 = this.toperrosdia7.QTD;
            this.toperrosdia8 = this.toperrosdia[8];
            this.desc_dia8 = this.toperrosdia8.DESCRICAO;
            this.qtd_dia8 = this.toperrosdia8.QTD;
            this.toperrosdia9 = this.toperrosdia[9];
            this.desc_dia9 = this.toperrosdia9.DESCRICAO;
            this.qtd_dia9 = this.toperrosdia9.QTD;
           });
       });

       this._toperrosService.getMes()
       .pipe(
         first()
       )
       .subscribe(() => {
        this._toperrosService.getMes()
          .subscribe(toperrosmes => {
            this.toperrosmes = toperrosmes;
            this.toperrosmes0 = this.toperrosmes[0];
            this.desc_mes0 = this.toperrosmes0.DESCRICAO;
            this.qtd_mes0 = this.toperrosmes0.QTD;
            this.toperrosmes1 = this.toperrosmes[1];
            this.desc_mes1 = this.toperrosmes1.DESCRICAO;
            this.qtd_mes1 = this.toperrosmes1.QTD;
            this.toperrosmes2 = this.toperrosmes[2];
            this.desc_mes2 = this.toperrosmes2.DESCRICAO;
            this.qtd_mes2 = this.toperrosmes2.QTD;
            this.toperrosmes3 = this.toperrosmes[3];
            this.desc_mes3 = this.toperrosmes3.DESCRICAO;
            this.qtd_mes3 = this.toperrosmes3.QTD;
            this.toperrosmes4 = this.toperrosmes[4];
            this.desc_mes4 = this.toperrosmes4.DESCRICAO;
            this.qtd_mes4 = this.toperrosmes4.QTD;
            this.toperrosmes5 = this.toperrosmes[5];
            this.desc_mes5 = this.toperrosmes5.DESCRICAO;
            this.qtd_mes5 = this.toperrosmes5.QTD;
            this.toperrosmes6 = this.toperrosmes[6];
            this.desc_mes6 = this.toperrosmes6.DESCRICAO;
            this.qtd_mes6 = this.toperrosmes6.QTD;
            this.toperrosmes7 = this.toperrosmes[7];
            this.desc_mes7 = this.toperrosmes7.DESCRICAO;
            this.qtd_mes7 = this.toperrosmes7.QTD;
            this.toperrosmes8 = this.toperrosmes[8];
            this.desc_mes8 = this.toperrosmes8.DESCRICAO;
            this.qtd_mes8 = this.toperrosmes8.QTD;
            this.toperrosmes9 = this.toperrosmes[9];
            this.desc_mes9 = this.toperrosmes9.DESCRICAO;
            this.qtd_mes9 = this.toperrosmes9.QTD;
          });
      });
 
     IntervalObservable.create(15000)
       .pipe(
         takeWhile(() => this.alive)
       )
       .subscribe(() => {
        this._toperrosService.getMes()
          .subscribe(toperrosmes => {
            this.toperrosmes = toperrosmes;
            this.toperrosmes0 = this.toperrosmes[0];
            this.desc_mes0 = this.toperrosmes0.DESCRICAO;
            this.qtd_mes0 = this.toperrosmes0.QTD;
            this.toperrosmes1 = this.toperrosmes[1];
            this.desc_mes1 = this.toperrosmes1.DESCRICAO;
            this.qtd_mes1 = this.toperrosmes1.QTD;
            this.toperrosmes2 = this.toperrosmes[2];
            this.desc_mes2 = this.toperrosmes2.DESCRICAO;
            this.qtd_mes2 = this.toperrosmes2.QTD;
            this.toperrosmes3 = this.toperrosmes[3];
            this.desc_mes3 = this.toperrosmes3.DESCRICAO;
            this.qtd_mes3 = this.toperrosmes3.QTD;
            this.toperrosmes4 = this.toperrosmes[4];
            this.desc_mes4 = this.toperrosmes4.DESCRICAO;
            this.qtd_mes4 = this.toperrosmes4.QTD;
            this.toperrosmes5 = this.toperrosmes[5];
            this.desc_mes5 = this.toperrosmes5.DESCRICAO;
            this.qtd_mes5 = this.toperrosmes5.QTD;
            this.toperrosmes6 = this.toperrosmes[6];
            this.desc_mes6 = this.toperrosmes6.DESCRICAO;
            this.qtd_mes6 = this.toperrosmes6.QTD;
            this.toperrosmes7 = this.toperrosmes[7];
            this.desc_mes7 = this.toperrosmes7.DESCRICAO;
            this.qtd_mes7 = this.toperrosmes7.QTD;
            this.toperrosmes8 = this.toperrosmes[8];
            this.desc_mes8 = this.toperrosmes8.DESCRICAO;
            this.qtd_mes8 = this.toperrosmes8.QTD;
            this.toperrosmes9 = this.toperrosmes[9];
            this.desc_mes9 = this.toperrosmes9.DESCRICAO;
            this.qtd_mes9 = this.toperrosmes9.QTD;
          });
      });
    
  }

  // ngOnChanges(): void {
  //   // get our data immediately when the component inits
  //   this._toperrosService.getDia()
  //     .pipe(
  //       first()
  //     )
  //     .subscribe((toperrosdia) => {
  //       this.toperrosdia = toperrosdia;
  //       this.toperrosdia1 = this.toperrosdia[1];
  //       this.display = true;
  //     });

  //     this._toperrosService.getMes()
  //     .pipe(
  //       first()
  //     )
  //     .subscribe((toperrosmes) => {
  //       this.toperrosmes = toperrosmes;
  //       this.display = true;
  //     });
  // }

  openDialog(): void {
    // var index = this.lista.findIndex(x => x.NU_TRANSACAO == this.idSelecionado);
   // this._alternadorservice.capturaI(index);

    let dialogRef = this.dialog.open(DialogSettingsComponentTopErros, {
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
  selector: 'dialog-settings-component-top-erros',
  templateUrl: 'dialog-settings-component.html',
})
export class DialogSettingsComponentTopErros {

  checked1 = false;
  checked2 = false;
  checked3 = false;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingsComponentTopErros>,
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

