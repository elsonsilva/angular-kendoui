import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { first, takeWhile } from 'rxjs/operators';

import { IAcumuladoMes } from './acumulado-mes';
import { AcumuladoMesService} from './acumulado-mes.service';

@Component({
  selector: 'app-acumulado-mes',
  templateUrl: './acumulado-mes.component.html',
  styleUrls: ['./acumulado-mes.component.scss']
})
export class AcumuladoMesComponent implements OnInit, OnChanges, OnDestroy {

  @Input() idProduto;

  acumulados: IAcumuladoMes[] = [];

  private id: number;

  errorMessage: string;
  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this

private alive: boolean; // used to unsubscribe from the IntervalObservable
// when OnDestroy is called.

  constructor(sanitizer: DomSanitizer, private _acumuladoService: AcumuladoMesService) {
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

