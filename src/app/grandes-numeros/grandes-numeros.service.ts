
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IGrandes } from './grandes';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class GrandesNumerosService {

  // private _grandesUrl = 'assets/dados/GRANDES_NUMEROS.json';
  private _grandesUrl = this._urlservice.retornaURL() + 'GRANDES_NUMEROS.json';

  constructor(private _http: HttpClient,
              public _urlservice: UrlService) { }

  getGrandes(): Observable<IGrandes[]> {
   // console.log('teste: ' + getID);
     return this._http.get<IGrandes[]>(this._grandesUrl)
         // .retry(3)
         .pipe(
             map(data => data) // or any other operator
            );
         // .do(data => console.log('All: ' + JSON.stringify(data)))
       //  .catch(this.handleError)

 }

 private handleError(error: HttpErrorResponse) {

     console.error(error);
     return observableThrowError(error || 'Server error');
 }
}
