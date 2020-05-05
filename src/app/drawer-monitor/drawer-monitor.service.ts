
import {throwError as observableThrowError,  Observable ,  of } from 'rxjs';
import { Injectable  } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { map, retry, do, catch, throw } from 'rxjs/operators';
import { map, retry, tap, catchError } from 'rxjs/operators';

import { IDrawer } from './drawer';
import { Options } from 'selenium-webdriver/safari';

import { UrlService } from '../shared/url-base.service';

    // import { AsyncLocalStorage } from 'angular-async-local-storage';

    // @Injectable()
    // export class YourService {

    //   constructor(protected localStorage: AsyncLocalStorage) {}

    // }

    // const headers = new HttpHeaders().set("Content-Type", "text/html; charset=utf-8");
    // const headers = new HttpHeaders()
    // .set('Content-Type', 'application/json; charset=utf-8')
    // .set('responseType', 'text');

    
    // const options = { responseType: "text"  as "json"};
   //  const options = { responseType: "json"};

@Injectable()
export class DrawerMonitorService {
    
    // private _productUrl = 'assets/dados/TRANSACOES.json';
    private _productUrl = this._urlservice.retornaURL() + 'TRANSACOES.json';
    
    constructor(private _http: HttpClient,
                public _urlservice: UrlService) { }

    

    getProducts(): Observable<IDrawer[]> {
        this._productUrl = encodeURI(this._productUrl);
       // return this._http.get<IDrawer[]>(this._productUrl, options);
        return this._http.get<IDrawer[]>(this._productUrl);
            // .do(data => console.log('All: ' +  JSON.stringify(data)))
           // .catchError(this.handleError);
    }

    getProduct(id: number): Observable<IDrawer> {
        return this.getProducts()
            .pipe(
                map((products: IDrawer[]) => products.find(p => p.NU_TRANSACAO === id)),
                
            ); // or any other operator
    }

    private handleError(error: HttpErrorResponse) {

        console.error(error);
        return observableThrowError(error || 'Server error');
    }
}
