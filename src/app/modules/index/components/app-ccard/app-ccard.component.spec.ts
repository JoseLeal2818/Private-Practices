import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCcardComponent } from './app-ccard.component';

describe('AppCcardComponent', () => {
  let component: AppCcardComponent;
  let fixture: ComponentFixture<AppCcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
