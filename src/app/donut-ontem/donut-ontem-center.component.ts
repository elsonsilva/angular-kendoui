import { Component, OnInit, OnDestroy, OnChanges, Input  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IDonutOntem } from './donut-ontem';
import { DonutOntemCenterService } from './donut-ontem-center.service';

@Component({
  selector: 'app-donut-ontem-center',
  templateUrl: './donut-ontem-center.component.html',
  styleUrls: ['./donut-ontem-center.component.scss']
})
export class DonutOntemCenterComponent implements OnInit, OnChanges, OnDestroy  {

  @Input() idProduto: number;

  errorMessage: string;

  private idDonut: number;

  donutcenters: IDonutOntem[] = [];

  private display: boolean;

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  // constructor(sanitizer: DomSanitizer, private _donutCenterService: DonutCenterService) {
    constructor(sanitizer: DomSanitizer, private _donutOntemCenterService: DonutOntemCenterService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }

  ngOnInit(): void {
     this.idDonut = this.idProduto;
    // this.idDonut = 21011;
    // console.log('GETID:' + this.idDonut);
    // get our data immediately when the component inits
    this._donutOntemCenterService.getDonutCenter(this.idDonut)
    .pipe(
      first()
     )
      .subscribe((donutcenters) => {
        this.donutcenters = donutcenters;
        this.display = true;
      });

    // get our data every subsequent 10 seconds
    // https://stackoverflow.com/questions/35316583/angular2-http-at-an-interval
    // IntervalObservable.create(30000)
    // .pipe(
    //   takeWhile(() => this.alive)
    //  )
    //   .subscribe(() => {
    //     this._donutCenterService.getDonutCenter(this.idDonut)
    //       .subscribe(donutcenters => {
    //         this.donutcenters = donutcenters;
    //       });
    //   });
  }

  ngOnChanges(): void {
    this.idDonut = this.idProduto;
    // this.idDonut = 21011;
    // get our data immediately when the component inits
    this._donutOntemCenterService.getDonutCenter(this.idDonut)
    .pipe(
      first()
     )
      .subscribe((donutcenters) => {
        this.donutcenters = donutcenters;
        this.display = true;
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
