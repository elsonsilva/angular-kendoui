
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { filterBy } from '@progress/kendo-data-query';

import { ICamps } from './camps';

import { UrlService } from '../shared/url-base.service';

@Injectable()
export class CampanhasService {

    // private _grandesUrl = 'assets/dados/GRANDES_NUMEROS.json';
    private _diaUrl = this._urlservice.retornaURL() + 'TOP_ERROS_DIA.json';
    private _mesUrl = this._urlservice.retornaURL() + 'TOP_ERROS_MES.json';

    constructor(private _http: HttpClient,
        public _urlservice: UrlService) { }

    getDia(): Observable<ICamps[]> {
        // console.log('teste: ' + getID);
        return this._http.get<ICamps[]>(this._diaUrl)
            // .retry(3)
            .pipe(
                map(data => data) // or any other operator
            );
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        //  .catch(this.handleError)

    }

    getMes(): Observable<ICamps[]> {
        // console.log('teste: ' + getID);
        return this._http.get<ICamps[]>(this._mesUrl)
            // .retry(3)
            .pipe(
                map(data => data) // or any other operator
            );
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        //  .catch(this.handleError)

    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
