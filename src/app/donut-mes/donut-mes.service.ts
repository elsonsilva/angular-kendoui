
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

import { filterBy } from '@progress/kendo-data-query';

import { IDonutMes } from './donut-mes';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class DonutMesService {

    // private _donutMesUrl = 'assets/dados/DONUT_MES.json';
    private _donutMesUrl = this._urlservice.retornaURL() + 'DONUT_MES.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getDonut(id: number): Observable<IDonutMes[]> {
        const getID = id;
        return this._http.get<IDonutMes[]>(this._donutMesUrl)
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
