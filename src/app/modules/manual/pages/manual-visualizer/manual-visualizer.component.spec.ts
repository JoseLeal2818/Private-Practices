import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualVisualizerComponent } from './manual-visualizer.component';

describe('ManualVisualizerComponent', () => {
  let component: ManualVisualizerComponent;
  let fixture: ComponentFixture<ManualVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
