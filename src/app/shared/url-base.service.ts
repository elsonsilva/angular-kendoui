import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private _urlbase: string = 'assets/dados/';

  // private _urlbase: string = '//DF7436SR274/1001meiosdigitais.caixa/monitor/assets/dados/';

  constructor() { }
 
  retornaURL(){
   // console.log('URL: '+ this._urlbase);
    return this._urlbase;
    
  }

}