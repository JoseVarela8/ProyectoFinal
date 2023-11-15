import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarActividadesComponent } from './mostrar-actividades.component';

describe('MostrarActividadesComponent', () => {
  let component: MostrarActividadesComponent;
  let fixture: ComponentFixture<MostrarActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarActividadesComponent]
    });
    fixture = TestBed.createComponent(MostrarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
