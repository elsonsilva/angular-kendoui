import { TestBed, inject } from '@angular/core/testing';

import { GrandesNumerosService } from './grandes-numeros.service';

describe('GrandesNumerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrandesNumerosService]
    });
  });

  it('should be created', inject([GrandesNumerosService], (service: GrandesNumerosService) => {
    expect(service).toBeTruthy();
  }));
});
