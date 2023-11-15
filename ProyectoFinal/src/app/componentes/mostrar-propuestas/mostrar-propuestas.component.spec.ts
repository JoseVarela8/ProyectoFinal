import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPropuestasComponent } from './mostrar-propuestas.component';

describe('MostrarPropuestasComponent', () => {
  let component: MostrarPropuestasComponent;
  let fixture: ComponentFixture<MostrarPropuestasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPropuestasComponent]
    });
    fixture = TestBed.createComponent(MostrarPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
