
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, tap } from 'rxjs/operators';

// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IAcumuladoMes } from './acumulado-mes';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class AcumuladoMesService {

   // private _acumuladoUrl = 'assets/dados/ACUMULADO_MES.json';
    private _acumuladoUrl = this._urlservice.retornaURL() + 'ACUMULADO_MES.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getAcumulados(id: number): Observable<IAcumuladoMes[]> {
        const getID = id;
        return this._http.get<IAcumuladoMes[]>(this._acumuladoUrl)
            // .retry(3)
            .pipe(
                map(data => filterBy(data, {
                     logic: 'and',
                     filters: [
                         { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                     ]
                 })),
                // tap(data => console.log('ACUMULADO: ' +  JSON.stringify(data))) // or any other operator
               );
            
           // .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
