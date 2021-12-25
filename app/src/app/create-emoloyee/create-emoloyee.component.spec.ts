import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmoloyeeComponent } from './create-emoloyee.component';

describe('CreateEmoloyeeComponent', () => {
  let component: CreateEmoloyeeComponent;
  let fixture: ComponentFixture<CreateEmoloyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmoloyeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmoloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
