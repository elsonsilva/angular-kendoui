
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { ITotais } from '../totais/totais';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class ErrosAnoService {

    // private _totaisUrl = 'assets/dados/TOTAIS_ANO.json';
    private _totaisUrl = this._urlservice.retornaURL() + 'TOTAIS_ANO.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getErros(id: number): Observable<ITotais[]> {
        const getID = id;
        return this._http.get<ITotais[]>(this._totaisUrl)
            // .retry(3)
            .pipe(
                map(data => filterBy(data, {
                     logic: 'and',
                     filters: [
                         { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                     ]
                 })) // or any other operator
               );
            // .do(data => console.log('ACUMULADO: ' +  JSON.stringify(data)))
           // .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
