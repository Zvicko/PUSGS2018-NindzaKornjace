import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEndingBranchOfficeComponent } from './choose-ending-branch-office.component';

describe('ChooseEndingBranchOfficeComponent', () => {
  let component: ChooseEndingBranchOfficeComponent;
  let fixture: ComponentFixture<ChooseEndingBranchOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseEndingBranchOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEndingBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
