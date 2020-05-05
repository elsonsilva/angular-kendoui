import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IDonut } from './donut';
import { DonutService } from './donut.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit, OnChanges, OnDestroy {

  @Input() idProduto;

  errorMessage: string;

  private id: number;

  donuts: IDonut[] = [];

  private display: boolean;

  private alive: boolean;

  titulo: any;
  idSelecionado = 24151;

  constructor(sanitizer: DomSanitizer, private _donutService: DonutService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;

  }

  recebeProduto(titulo) {
    // console.log(titulo);
     this.idSelecionado = this.idProduto;
   }


  ngOnInit(): void {

    this.recebeProduto(this.titulo);
  //  console.log('teste1: ' + this.idSelecionado);

    this.id = this.idSelecionado;
    // get our data immediately when the component inits
    this._donutService.getDonut(this.id)
    .pipe(
      first()
     )
       // only gets fired once
      .subscribe((donuts) => {
        this.donuts = donuts;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    IntervalObservable.create(30000)
    .pipe(
      takeWhile(() => this.alive)
     )
      .subscribe(() => {
        this._donutService.getDonut(this.id)
          .subscribe(donuts => {
            this.donuts = donuts;
          });
      });
  }

  ngOnChanges(): void {

    this.recebeProduto(this.titulo);
  //  console.log('teste2: ' + this.idSelecionado);

    this.id = this.idSelecionado;
    // get our data immediately when the component inits
    this._donutService.getDonut(this.id)
    .pipe(
      first()
     )
      .subscribe((donuts) => {
        this.donuts = donuts;
        this.display = true;
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
