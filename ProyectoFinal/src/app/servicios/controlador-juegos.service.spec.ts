import { TestBed } from '@angular/core/testing';

import { ControladorJuegosService } from './controlador-juegos.service';

describe('ControladorJuegosService', () => {
  let service: ControladorJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
