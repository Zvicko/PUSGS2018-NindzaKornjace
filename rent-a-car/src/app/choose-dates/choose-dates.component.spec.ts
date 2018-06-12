import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDatesComponent } from './choose-dates.component';

describe('ChooseDatesComponent', () => {
  let component: ChooseDatesComponent;
  let fixture: ComponentFixture<ChooseDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
