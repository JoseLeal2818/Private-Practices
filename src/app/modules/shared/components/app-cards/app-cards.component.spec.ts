import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardsComponent } from './app-cards.component';

describe('AppCardsComponent', () => {
  let component: AppCardsComponent;
  let fixture: ComponentFixture<AppCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
