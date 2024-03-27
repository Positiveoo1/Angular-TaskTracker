import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeatilComponent } from './task-deatil.component';

describe('TaskDeatilComponent', () => {
  let component: TaskDeatilComponent;
  let fixture: ComponentFixture<TaskDeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDeatilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
