import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlternadorService {

  private alterna1: boolean = false;
  private alterna2: boolean = false;
  private alterna3: boolean = false;
  private spin: boolean = false;
  private i: number = 0;
  private tela:number;

  constructor() { }

  captura1(checked1: boolean){
    this.alterna1 = checked1;
  //  console.log('CAPTURA1: ' +this.alterna1);
  }

  retorna1(){
    return this.alterna1;
  }

  captura2(checked2: boolean){
    this.alterna2 = checked2;
   // console.log('CAPTURA2: ' +this.alterna2);
  }

  retorna2(){
    return this.alterna2;
  }

  captura3(checked3: boolean){
    this.alterna3 = checked3;
   // console.log('CAPTURA3: ' +this.alterna3);
  }

  retorna3(){
    return this.alterna3;
  }

  capturaSpin(spin: boolean){
    this.spin = spin;
  //  console.log('SPIN: ' +this.spin);
  }

  retornaSpin(){
    return this.spin;
  }

  capturaI(i: number){
    this.i = i;
   // console.log('ID_SELECIONADO: ' +this.i);
  }

  retornaI(){
    return this.i;
  }

  capturaTela(tela:number){
    this.tela = tela;
  }

  retornaTela(){
    return this.tela;
  }
}
