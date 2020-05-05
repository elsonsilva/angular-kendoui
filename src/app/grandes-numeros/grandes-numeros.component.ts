import { Component, ViewChild, ElementRef, OnInit, OnDestroy, OnChanges, AfterViewInit, Inject  } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { first, takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IDrawer } from '../drawer-monitor/drawer';

import { IGrandes } from './grandes';
import { GrandesNumerosService } from './grandes-numeros.service';
import { AlternadorService } from '../shared/alternador.service';

import { homeTransition } from '../shared/animations';

@Component({
  selector: 'app-grandes-numeros',
  templateUrl: './grandes-numeros.component.html',
  styleUrls: ['./grandes-numeros.component.scss'],
  animations: [ homeTransition ],
  host: {
    '[@homeTransition]': ''
  }
})
export class GrandesNumerosComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @ViewChild('target2') MyProp2: ElementRef;
  @ViewChild('target1') MyProp1: ElementRef;

  grandes: IGrandes[] = [];
  lista: IDrawer[] = [];
  errorMessage: string;
  data: boolean;
  public btSpin: boolean;
  private tela: number = 2;

  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  constructor(sanitizer: DomSanitizer,
    private _grandesnumerosService: GrandesNumerosService,
    private router: Router,
    public dialog: MatDialog,
    public _alternadorservice: AlternadorService) {
    this.display = false;
    this.alive = true;
  }

  ngOnInit(): void {
    // get our data immediately when the component inits
   // console.log('GRANDES: ' + this._alternadorservice.retornaI())
    this.btSpin = this._alternadorservice.retornaSpin()
   // console.log('GRANDES_SPIN: ' + this.btSpin)
    // this._alternadorservice.capturaTela(this.tela);
    this._grandesnumerosService.getGrandes()
      .pipe(
        first()
      )
      .subscribe((grandes) => {
        this.grandes = grandes;
        this.display = true;
      });

    IntervalObservable.create(180000)
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(() => {
        this._grandesnumerosService.getGrandes()
          .subscribe(grandes => {
            this.grandes = grandes;
          });
      });


  }

  ngOnChanges(): void {
    // get our data immediately when the component inits
    this._grandesnumerosService.getGrandes()
      .pipe(
        first()
      )
      .subscribe((grandes) => {
        this.grandes = grandes;
        this.display = true;
      });
  }

  openDialog(): void {
    // var index = this.lista.findIndex(x => x.NU_TRANSACAO == this.idSelecionado);
   // this._alternadorservice.capturaI(index);

    let dialogRef = this.dialog.open(DialogSettingsComponentGrandesNumeros, {
      // height: '250px',
      width: '450px'
      // , data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.alive = true;

      this.ngOnInit();
    });
  }

  retornaScroll(): void {
    if (this._alternadorservice.retorna2 && this.btSpin) {
      setTimeout(() => {
        this.MyProp1.nativeElement.scrollIntoView({ behavior: "smooth" });
        this.mudapagina();
      }, 10000);
    }
  }

  ngAfterViewInit(): void {

    if (this._alternadorservice.retorna2 && this.btSpin) {

      setTimeout(() => {
        this.MyProp2.nativeElement.scrollIntoView({ behavior: "smooth" });
        this.retornaScroll();
      }, 10000);
    }
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

  mudapagina() {
    if (this._alternadorservice.retorna3 && this.btSpin) {
      setTimeout(() => {
        this.router.navigate(['/top-erros']);
        // this.router.navigate(['']);
      }, 7000);
    }
  }

  gohome() {
    this.router.navigate(['/monitor']);
  }

  public scroll(element: any): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  //   scroll(el) {
  //     el.scrollIntoView({behavior:"smooth"});
  // }

}


@Component({
  selector: 'dialog-settings-component-grandesnumeros',
  templateUrl: 'dialog-settings-component.html',
})
export class DialogSettingsComponentGrandesNumeros {

  checked1 = false;
  checked2 = false;
  checked3 = false;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingsComponentGrandesNumeros>,
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
