import { TestBed, inject } from '@angular/core/testing';

import { AlternadorService } from './alternador.service';

describe('AlternadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlternadorService]
    });
  });

  it('should be created', inject([AlternadorService], (service: AlternadorService) => {
    expect(service).toBeTruthy();
  }));
});
