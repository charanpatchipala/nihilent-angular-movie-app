import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2AngularComponent } from './task2-angular.component';

describe('Task2AngularComponent', () => {
  let component: Task2AngularComponent;
  let fixture: ComponentFixture<Task2AngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task2AngularComponent]
    });
    fixture = TestBed.createComponent(Task2AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
