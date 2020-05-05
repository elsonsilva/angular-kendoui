import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { ISubtituloOntem } from './subtitulo-ontem';
import { SubtituloOntemService } from './subtitulo-ontem.service';

@Component({
  selector: 'app-subtitulo-ontem',
  templateUrl: './subtitulo-ontem.component.html',
  styleUrls: ['./subtitulo-ontem.component.scss']
})
export class SubtituloOntemComponent implements OnInit, OnChanges, OnDestroy  {

  @Input() idProduto;

  subtitulos: ISubtituloOntem[] = [];

  errorMessage: string;

  private id: number;

  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

  private alive: boolean; // used to unsubscribe from the IntervalObservable
  // when OnDestroy is called.

  constructor(sanitizer: DomSanitizer, private _subtituloOntemService: SubtituloOntemService) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    this.display = false;
    this.alive = true;
  }



    ngOnInit(): void {
      this.id = this.idProduto;
      // get our data immediately when the component inits
      this._subtituloOntemService.getSubtitulosOntem(this.id)
      .pipe(
        first()
       )
        .subscribe((subtitulos) => {
          this.subtitulos = subtitulos;
          this.display = true;
        });

      // IntervalObservable.create(30000)
      // .pipe(
      //   takeWhile(() => this.alive)
      //  )
      // .subscribe(() => {
      //   this._subtituloService.getSubtitulos(this.id)
      //     .subscribe(subtitulos => {
      //       this.subtitulos = subtitulos;
      //     });
      // });

  }

  ngOnChanges(): void {
    this.id = this.idProduto;
    // get our data immediately when the component inits
    this._subtituloOntemService.getSubtitulosOntem(this.id)
    .pipe(
      first()
     )
      .subscribe((subtitulos) => {
        this.subtitulos = subtitulos;
        this.display = true;
      });
  }

  ngOnDestroy () {
    this.alive = false; // switches your IntervalObservable off
  }

}
