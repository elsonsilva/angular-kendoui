import { throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IMovimentoOntem } from './movimento-ontem';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class MovimentoOntemService {

   // private _movimentoOntemUrl = 'assets/dados/MOVIMENTO_ONTEM.json';
   private _movimentoOntemUrl = this._urlservice.retornaURL() + 'MOVIMENTO_ONTEM.json';

   constructor(private _http: HttpClient,
                public _urlservice: UrlService) {
   }

    getMovimentosOntem(id: number): Observable<IMovimentoOntem[]> {
       const getID = id;
      // console.log('teste: ' + getID);
        return this._http.get<IMovimentoOntem[]>(this._movimentoOntemUrl)
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
