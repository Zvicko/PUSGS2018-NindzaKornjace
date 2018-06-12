import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseStartingBranchOfficeComponent } from './choose-starting-branch-office.component';

describe('ChooseStartingBranchOfficeComponent', () => {
  let component: ChooseStartingBranchOfficeComponent;
  let fixture: ComponentFixture<ChooseStartingBranchOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseStartingBranchOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseStartingBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
