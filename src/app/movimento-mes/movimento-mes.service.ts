import { throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IMovimentoMes } from './movimento-mes';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class MovimentoMesService {

   // private _movimentoMesUrl = 'assets/dados/MOVIMENTO_MES.json';
   private _movimentoMesUrl = this._urlservice.retornaURL() + 'MOVIMENTO_MES.json';

   constructor(private _http: HttpClient,
                public _urlservice: UrlService) {
   }

    getMovimentosMes(id: number): Observable<IMovimentoMes[]> {
       const getID = id;
      // console.log('teste: ' + getID);
        return this._http.get<IMovimentoMes[]>(this._movimentoMesUrl)
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
