import { Component, OnInit } from '@angular/core';

// import { fadeAnimation, routerTransition } from './shared/animations';
// import { routerTransition } from './shared/animations';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    // animations: [fadeAnimation, routerTransition]
    // animations: [routerTransition]

})
export class AppComponent  implements OnInit {

  constructor() { }
  title = 'MeiosDigitaisCAIXA'
  ngOnInit() {
  }

  // getState(outlet) {
  //   return outlet.activatedRouteData.state;
  // }
}