
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map } from 'rxjs/operators';

// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IAcumuladoOntem } from './acumulado-ontem';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class AcumuladoOntemService {

   // private _acumuladoUrl = 'assets/dados/ACUMULADO_ONTEM.json';
    private _acumuladoUrl = this._urlservice.retornaURL() + 'ACUMULADO_ONTEM.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getAcumulados(id: number): Observable<IAcumuladoOntem[]> {
        const getID = id;
        return this._http.get<IAcumuladoOntem[]>(this._acumuladoUrl)
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
