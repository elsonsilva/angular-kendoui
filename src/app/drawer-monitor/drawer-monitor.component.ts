import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { IDrawer } from './drawer';
import { DrawerMonitorService } from './drawer-monitor.service';

@Component({
  selector: 'app-drawer-monitor',
  templateUrl: './drawer-monitor.component.html',
  styleUrls: ['./drawer-monitor.component.scss']
})

export class DrawerMonitorComponent implements OnInit {

    products: IDrawer[];
    @Output() onSelected = new EventEmitter<IDrawer>();
    @Output() navToggle = new EventEmitter<boolean>();

    listFilter = '';
    errorMessage: string;
    stateFlag: boolean = false;

    constructor(sanitizer: DomSanitizer, private _drawerMonitorService: DrawerMonitorService) {

    }

    // toggleImage(): void {
    //     this.showImage = !this.showImage;
    // }

    ngOnInit(): void {
      
      this._drawerMonitorService.getProducts()
      .subscribe(
        products => this.products = products,
        error =>  this.errorMessage = <any>error);

        IntervalObservable.create(90000)
          .subscribe(() => {
            this._drawerMonitorService.getProducts()
              .subscribe(products => {
                this.products = products;
              });
          });
    }

    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Lista de Produtos: ' + message;
    // }

    onSelect(product: IDrawer): void {
       // console.log('Produto: ', product);
        this.onSelected.emit(product);
        this.navToggle.emit(true);
    }

    toggleState() {
      this.stateFlag = !this.stateFlag;
    }

    calculateClasses() {
      return {
        hamburger: true,
          'hamburger--squeeze': true,
          'is-active': this.stateFlag
      };
    }


}
