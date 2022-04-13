import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyFormComponent } from './add-money-form.component';

describe('AddMoneyFormComponent', () => {
  let component: AddMoneyFormComponent;
  let fixture: ComponentFixture<AddMoneyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoneyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
