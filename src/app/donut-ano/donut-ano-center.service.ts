
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, retry, tap, catchError } from 'rxjs/operators';


import { filterBy } from '@progress/kendo-data-query';

import { IDonutAno } from './donut-ano';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class DonutAnoCenterService {

    // private _donutUrl = 'assets/dados/DONUT_CENTER_ANO.json';
    private _donutUrl = this._urlservice.retornaURL() + 'DONUT_CENTER_ANO.json';

    constructor(private _http: HttpClient,
        public _urlservice: UrlService) { }

    getDonutCenter(idDonut: number): Observable<IDonutAno[]> {
        const getID = idDonut;
        return this._http.get<IDonutAno[]>(this._donutUrl)
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
