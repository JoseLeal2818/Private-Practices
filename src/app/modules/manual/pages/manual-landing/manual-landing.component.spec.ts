import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualLandingComponent } from './manual-landing.component';

describe('ManualLandingComponent', () => {
  let component: ManualLandingComponent;
  let fixture: ComponentFixture<ManualLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
