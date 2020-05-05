import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IAcumulado } from './acumulado';
import { AcumuladoService} from './acumulado.service';
// import { TotaisDiaService } from './../totais/totais-dia.service';

@Component({
  selector: 'app-acumulado',
  templateUrl: './acumulado.component.html'
})
 // export class AcumuladoComponent implements OnInit, AfterContentInit {
  export class AcumuladoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() idProduto;

  acumulados: IAcumulado[] = [];

  private id: number;

  errorMessage: string;
  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

private alive: boolean; // used to unsubscribe from the IntervalObservable
// when OnDestroy is called.

  constructor(sanitizer: DomSanitizer, private _acumuladoService: AcumuladoService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }

  ngOnInit(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._acumuladoService.getAcumulados(this.id)
    .pipe(
      first()
     )
      .subscribe((acumulados) => {
        this.acumulados = acumulados;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    IntervalObservable.create(30000)
    .pipe(
      takeWhile(() => this.alive)
     )
      .subscribe(() => {
        this._acumuladoService.getAcumulados(this.id)
          .subscribe(acumulados => {
            this.acumulados = acumulados;
          });
      });
  }

  ngOnChanges(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._acumuladoService.getAcumulados(this.id)
    .pipe(
      first()
     )
      .subscribe((acumulados) => {
        this.acumulados = acumulados;
        this.display = true;
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
