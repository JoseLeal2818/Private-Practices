import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSatisfactionComponent } from './app-satisfaction.component';

describe('AppSatisfactionComponent', () => {
  let component: AppSatisfactionComponent;
  let fixture: ComponentFixture<AppSatisfactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSatisfactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
