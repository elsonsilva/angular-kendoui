
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { ISubtituloMes } from './subtitulo-mes';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class SubtituloMesService {

    // private _subtituloOntemUrl = 'assets/dados/SUBTITULO_ONTEM.json';
    private _subtituloMesUrl = this._urlservice.retornaURL() + 'SUBTITULO_MES.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }


    getSubtitulosMes(id: number): Observable<ISubtituloMes[]> {
        const getID = id;
        return this._http.get<ISubtituloMes[]>(this._subtituloMesUrl)
            // .retry(3)
            // .do(data => console.log('TOTAIS: ' +  JSON.stringify(data)))
            .pipe(
               map(data => filterBy(data, {
                    logic: 'and',
                    filters: [
                        { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                    ]
                })) // or any other operator
              );
             // .catch(this.handleError)
    }

    private handleError(error: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return observableThrowError(error || 'Server error');
    }

}
