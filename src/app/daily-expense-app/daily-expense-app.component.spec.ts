import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpenseAppComponent } from './daily-expense-app.component';

describe('DailyExpenseAppComponent', () => {
  let component: DailyExpenseAppComponent;
  let fixture: ComponentFixture<DailyExpenseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyExpenseAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExpenseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
