import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogExpenseFormComponent } from './log-expense-form.component';

describe('LogExpenseFormComponent', () => {
  let component: LogExpenseFormComponent;
  let fixture: ComponentFixture<LogExpenseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogExpenseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
