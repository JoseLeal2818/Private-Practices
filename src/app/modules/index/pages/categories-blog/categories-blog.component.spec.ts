import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBlogComponent } from './categories-blog.component';

describe('CategoriesBlogComponent', () => {
  let component: CategoriesBlogComponent;
  let fixture: ComponentFixture<CategoriesBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
