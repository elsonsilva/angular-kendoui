
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IDonutOntem } from './donut-ontem';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class DonutOntemService {

    // private _donutOntemUrl = 'assets/dados/DONUT_ONTEM.json';
    private _donutOntemUrl = this._urlservice.retornaURL() + 'DONUT_ONTEM.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getDonut(id: number): Observable<IDonutOntem[]> {
        const getID = id;
        return this._http.get<IDonutOntem[]>(this._donutOntemUrl)
            // .retry(3)
            // .do(data => console.log('DONUT: ' +  JSON.stringify(data)))
            .pipe(
                retry(3),
                map(data => filterBy(data, {
                     logic: 'and',
                     filters: [
                         { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                     ]
                 })) // or any other operator
               );
           // .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
