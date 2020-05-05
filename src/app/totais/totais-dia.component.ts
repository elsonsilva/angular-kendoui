import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { ITotais } from './totais';
// import { IGapHist } from './gaps';
// import { IGapMeta } from './gaps';
import { TotaisDiaService } from './totais-dia.service';


@Component({
  selector: 'app-totais-dia',
  templateUrl: './totais-dia.component.html',
  styleUrls: ['./totais-dia.component.scss']
})
export class TotaisDiaComponent implements OnInit, OnChanges, OnDestroy {

   @Input() idProduto;
   errorMessage: string;
   totaisDia: ITotais[] = [];

   private id: number;
  //  private gaphistorico: IGapHist[] = [];
  //  private gapmeta: number;
   private display: boolean;
   private alive: boolean;

    constructor(sanitizer: DomSanitizer, private _totaisDiaService: TotaisDiaService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }


  ngOnInit(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._totaisDiaService.getTotais(this.id)
    .pipe(
      first()
     )
      .subscribe((totaisDia) => {
        this.totaisDia = totaisDia;
        this.display = true;
      });

      // this._totaisDiaService.getGaps(this.id)
      // .first() // only gets fired once
      // .subscribe((gaphistorico) => {
      //   this.gaphistorico = gaphistorico;
      //   this.display = true;
      // });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    IntervalObservable.create(30000)
    .pipe(
      takeWhile(() => this.alive)
     )
      .subscribe(() => {
        this._totaisDiaService.getTotais(this.id)
          .subscribe(totaisDia => {
            this.totaisDia = totaisDia;
          });
      });
  }

  ngOnChanges(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._totaisDiaService.getTotais(this.id)
    .pipe(
      first()
     )
      .subscribe((totaisDia) => {
        this.totaisDia = totaisDia;
        this.display = true;
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
