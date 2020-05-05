import { sequence,
         trigger,
         stagger,
         animate,
         style,
         group,
         query,
         transition,
         keyframes,
         animateChild } from '@angular/animations';


// const query = (s, a, o = { optional: true }) => q(s, a, o);
 
// export const fadeAnimation = trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    // transition('* => *', [
    //     query(
    //         ':enter',
    //         [style({ opacity: 0 })],
    //         { optional: true }
    //     ),
    //     query(
    //         ':leave',
    //         // here we apply a style and use the animate function to apply the style over 0.3 seconds
    //         [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
    //         { optional: true }
    //     ),
    //     query(
    //         ':enter',
    //         [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
    //         { optional: true }
    //     )
    // ])
// ]);

export const homeTransition = trigger('homeTransition', [
    transition(':enter', [
      query('mat-card', style({ opacity: 0 })),
      query('mat-card', stagger(300, [
        style({ transform: 'translateY(100px)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
    ]),
    // transition(':leave', [
    //   query('mat-card', stagger(300, [
    //     style({ transform: 'translateY(0px)', opacity: 1 }),
    //     animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    //   ])),        
    // ],)
  ]);

  export const fromleftTransition = trigger('fromleftTransition', [
    transition(':enter', [
      query('mat-card', style({ opacity: 0 })),
      query('mat-card', stagger(300, [
        style({ transform: 'translateX(-100px)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0px)', opacity: 1})),
      ])),
    ]),
    // transition(':leave', [
    //   query('mat-card', stagger(300, [
    //     style({ transform: 'translateY(0px)', opacity: 1 }),
    //     animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    //   ])),        
    // ],)
  ]);

  export const fromrightTransition = trigger('fromrightTransition', [
    transition(':enter', [
      query('mat-card', style({ opacity: 0 })),
      query('mat-card', stagger(300, [
        style({ transform: 'translateX(100px)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0px)', opacity: 1})),
      ])),
    ]),
    // transition(':leave', [
    //   query('mat-card', stagger(300, [
    //     style({ transform: 'translateY(0px)', opacity: 1 }),
    //     animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    //   ])),        
    // ],)
  ]);

  export const rightleftTransition = trigger('rightleftTransition', [
    transition(':enter', [
      query('.c_card', style({ opacity: 0 })),
      query('.c_card2', style({ opacity: 0 })),

      group([
      query('.c_card', stagger(250, [
        style({ transform: 'translateX(-70px)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0px)', opacity: 1})),
      ])),
      query('.c_card2', stagger(250, [
        style({ transform: 'translateX(70px)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0px)', opacity: 1})),
      ]))
      ])
    ])
  ]);

  // mat-card 
  // .flex-item

  // export const routerTransition = trigger('routerTransition', [
  //   transition('* => *', [
  //    // query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
  //    query(':enter, :leave', style({  })),
  //   // query(':enter', style({ transform: 'translateX(100%)' })),
  //     query(':enter', style({ })),
  //     sequence([
  //       query(':leave', animateChild()), 
  //       group([
  //         query(':leave', [
  //           // style({ transform: 'translateX(0%)' }),
  //           // animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
  //            // style({ transform: 'translateX(-100%)' }))
  //         ]),
  //         query(':enter', [
  //          // style({ transform: 'translateX(100%)' }),
  //           // animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
  //            // style({ transform: 'translateX(0%)' })),
  //         ]),
  //       ]),
  //       query(':enter', animateChild()),
  //     ])
  //   ])
  // ]);


