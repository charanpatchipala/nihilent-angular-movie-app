import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1AngularComponent } from './task1-angular.component';

describe('Task1AngularComponent', () => {
  let component: Task1AngularComponent;
  let fixture: ComponentFixture<Task1AngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task1AngularComponent]
    });
    fixture = TestBed.createComponent(Task1AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
