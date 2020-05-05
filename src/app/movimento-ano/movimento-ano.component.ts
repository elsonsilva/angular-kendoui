import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IMovimentoAno } from './movimento-ano';
import { MovimentoAnoService } from './movimento-ano.service';
// import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-movimento-ano',
  templateUrl: './movimento-ano.component.html',
  styleUrls: ['./movimento-ano.component.scss']
})
export class MovimentoAnoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() idProduto;

  movimentos: IMovimentoAno[] = [];

  private id: number;

  errorMessage: string;

  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  constructor(sanitizer: DomSanitizer, private _movimentoAnoService: MovimentoAnoService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }


  ngOnInit(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._movimentoAnoService.getMovimentosAno(this.id)
    .pipe(
      first()
     )
      .subscribe((movimentos) => {
        this.movimentos = movimentos;
        this.display = true;
      });

    // get our data every subsequent 30 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    // IntervalObservable.create(30000)
    // .pipe(
    //   takeWhile(() => this.alive)
    //  )
    //   .subscribe(() => {
    //     this._movimentoService.getMovimentos(this.id)
    //       .subscribe(movimentos => {
    //         this.movimentos = movimentos;
    //       });
    //   });
  }

  ngOnChanges(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._movimentoAnoService.getMovimentosAno(this.id)
    .pipe(
      first()
     )
      .subscribe((movimentos) => {
        this.movimentos = movimentos;
        this.display = true;
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}

