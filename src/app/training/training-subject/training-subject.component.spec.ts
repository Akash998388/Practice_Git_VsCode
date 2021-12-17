import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSubjectComponent } from './training-subject.component';

describe('TrainingSubjectComponent', () => {
  let component: TrainingSubjectComponent;
  let fixture: ComponentFixture<TrainingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
