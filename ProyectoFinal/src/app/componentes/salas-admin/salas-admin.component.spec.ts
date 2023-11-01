import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasAdminComponent } from './salas-admin.component';

describe('SalasAdminComponent', () => {
  let component: SalasAdminComponent;
  let fixture: ComponentFixture<SalasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalasAdminComponent]
    });
    fixture = TestBed.createComponent(SalasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
