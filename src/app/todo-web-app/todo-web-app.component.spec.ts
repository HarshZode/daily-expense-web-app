import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWebAppComponent } from './todo-web-app.component';

describe('TodoWebAppComponent', () => {
  let component: TodoWebAppComponent;
  let fixture: ComponentFixture<TodoWebAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWebAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
