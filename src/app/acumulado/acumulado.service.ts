
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IAcumulado } from './acumulado';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class AcumuladoService {

    // private _acumuladoUrl = 'assets/dados/ACUMULADO_DIA.json';
    private _acumuladoUrl = this._urlservice.retornaURL() + 'ACUMULADO_DIA.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    

    getAcumulados(id: number): Observable<IAcumulado[]> {
        const getID = id;
        return this._http.get<IAcumulado[]>(this._acumuladoUrl)
            // .retry(3)
            .pipe(
                map(data => filterBy(data, {
                     logic: 'and',
                     filters: [
                         { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                     ]
                 }))
               );
            // .do(data => console.log('ACUMULADO: ' +  JSON.stringify(data)))
           // .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
