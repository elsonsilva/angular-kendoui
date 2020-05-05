
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, retry, tap, catchError } from 'rxjs/operators';


import { filterBy } from '@progress/kendo-data-query';

import { IDonutMes } from './donut-mes';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class DonutMesCenterService {

    // private _donutUrl = 'assets/dados/DONUT_CENTER_MES.json';
    private _donutUrl = this._urlservice.retornaURL() + 'DONUT_CENTER_MES.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    getDonutCenter(idDonut: number): Observable<IDonutMes[]> {
        const getID = idDonut;
        return this._http.get<IDonutMes[]>(this._donutUrl)
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
