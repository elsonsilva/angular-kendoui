
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { ISubtitulo } from './subtitulo';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class SubtituloService {

    // private _subtituloUrl = 'assets/dados/SUBTITULO_DIA.json';
    private _subtituloUrl = this._urlservice.retornaURL() + 'SUBTITULO_DIA.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }


    getSubtitulos(id: number): Observable<ISubtitulo[]> {
        const getID = id;
        return this._http.get<ISubtitulo[]>(this._subtituloUrl)
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
