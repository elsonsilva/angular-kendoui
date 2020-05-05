
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
export class DonutOntemCenterService {

    // private _donutUrl = 'assets/dados/DONUT_CENTER_ONTEM.json';
    private _donutUrl = this._urlservice.retornaURL() + 'DONUT_CENTER_ONTEM.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getDonutCenter(idDonut: number): Observable<IDonutOntem[]> {
        const getID = idDonut;
        return this._http.get<IDonutOntem[]>(this._donutUrl)
           // .retry(3)
           .pipe(
            map(data => filterBy(data, {
                 logic: 'and',
                 filters: [
                     { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                 ]
             })) // or any other operator
           );
           // .do(data => console.log('DONUT_CENTER: ' +  JSON.stringify(data)))
           // .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
