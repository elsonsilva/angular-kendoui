
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
// import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { ITotaisOntem } from './totais-ontem';

import { UrlService } from '../shared/url-base.service';

// import { IGapHist } from './gaps';

// import { IGapMeta } from './gaps';

@Injectable()
export class TotaisOntemService {

    // private _totaisOntemUrl = 'assets/dados/TOTAIS_ONTEM.json';
    private _totaisOntemUrl = this._urlservice.retornaURL() + 'TOTAIS_ONTEM.json';

    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

// https://blog.angularindepth.com/the-new-angular-httpclient-api-9e5c85fe3361
    getTotais(id: number): Observable<ITotaisOntem[]> {
        const getID = id;
        return this._http.get<ITotaisOntem[]>(this._totaisOntemUrl)
            // .retry(3)
            .pipe(
                map(data => filterBy(data, {
                     logic: 'and',
                     filters: [
                         { field: 'NU_TRANSACAO', operator: 'eq', value: getID },
                     ]
                 })) // or any other operator
               );
          //  .catch(this.handleError);
    }


    private handleError(error: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
