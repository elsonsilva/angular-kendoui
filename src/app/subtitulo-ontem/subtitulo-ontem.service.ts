
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { ISubtituloOntem } from './subtitulo-ontem';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class SubtituloOntemService {

    // private _subtituloOntemUrl = 'assets/dados/SUBTITULO_ONTEM.json';
    private _subtituloOntemUrl = this._urlservice.retornaURL() + 'SUBTITULO_ONTEM.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }


    getSubtitulosOntem(id: number): Observable<ISubtituloOntem[]> {
        const getID = id;
        return this._http.get<ISubtituloOntem[]>(this._subtituloOntemUrl)
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
