import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtExporterenComponent } from './overzicht-exporteren.component';

describe('OverzichtExporterenComponent', () => {
  let component: OverzichtExporterenComponent;
  let fixture: ComponentFixture<OverzichtExporterenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtExporterenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtExporterenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
