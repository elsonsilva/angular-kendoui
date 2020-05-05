import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { ITotais } from '../totais/totais';
import { ErrosOntemService} from './erros-ontem.service';

@Component({
  selector: 'app-erros-ontem',
  templateUrl: './erros-ontem.component.html',
  styleUrls: ['./erros-ontem.component.scss']
})
export class ErrosOntemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() idProduto;

  totais: ITotais[] = [];

  private id: number;

  errorMessage: string;
  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

private alive: boolean; // used to unsubscribe from the IntervalObservable
// when OnDestroy is called.

  constructor(sanitizer: DomSanitizer, private _totaisDiaService: ErrosOntemService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }

  ngOnInit(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._totaisDiaService.getErros(this.id)
    .pipe(
      first()
     )
      .subscribe((totais) => {
        this.totais = totais;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    // IntervalObservable.create(30000)
    // .pipe(
    //   takeWhile(() => this.alive)
    //  )
    //   .subscribe(() => {
    //     this._totaisDiaService.getErros(this.id)
    //       .subscribe(totais => {
    //         this.totais = totais;
    //       });
    //   });
  }

  ngOnChanges(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._totaisDiaService.getErros(this.id)
    .pipe(
      first()
     )
      .subscribe((totais) => {
        this.totais = totais;
        this.display = true;
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}

