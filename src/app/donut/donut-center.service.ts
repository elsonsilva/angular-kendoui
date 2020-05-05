
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { IDonut } from './donut';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class DonutCenterService {

    // private _donutUrl = 'assets/dados/DONUT_CENTER_DIA.json';
    private _donutUrl = this._urlservice.retornaURL() + 'DONUT_CENTER_DIA.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getDonutCenter(idDonut: number): Observable<IDonut[]> {
        const getID = idDonut;
        return this._http.get<IDonut[]>(this._donutUrl)
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
