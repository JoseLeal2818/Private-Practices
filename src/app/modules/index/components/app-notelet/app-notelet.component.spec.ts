import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoteletComponent } from './app-notelet.component';

describe('AppNoteletComponent', () => {
  let component: AppNoteletComponent;
  let fixture: ComponentFixture<AppNoteletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoteletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoteletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
