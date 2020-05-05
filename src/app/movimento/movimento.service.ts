
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IMovimento } from './movimento';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class MovimentoService {

   // private _movimentoUrl = 'assets/dados/MOVIMENTO_DIA.json';
   private _movimentoUrl = this._urlservice.retornaURL() + 'MOVIMENTO_DIA.json';

   constructor(private _http: HttpClient,
                public _urlservice: UrlService) {
   }

    getMovimentos(id: number): Observable<IMovimento[]> {
       const getID = id;
      // console.log('teste: ' + getID);
        return this._http.get<IMovimento[]>(this._movimentoUrl)
            // .retry(3)
            .pipe(
                map(data => filterBy(data, {
                     logic: 'and',
                     filters: [
                         { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                     ]
                 })) // or any other operator
               );
            // .do(data => console.log('All: ' + JSON.stringify(data)))
          //  .catch(this.handleError)

    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
