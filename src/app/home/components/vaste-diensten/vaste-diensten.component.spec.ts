import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasteDienstenComponent } from './vaste-diensten.component';

describe('VasteDienstenComponent', () => {
  let component: VasteDienstenComponent;
  let fixture: ComponentFixture<VasteDienstenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasteDienstenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasteDienstenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
