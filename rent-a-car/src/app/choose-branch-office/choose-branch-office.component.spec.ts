import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBranchOfficeComponent } from './choose-branch-office.component';

describe('ChooseBranchOfficeComponent', () => {
  let component: ChooseBranchOfficeComponent;
  let fixture: ComponentFixture<ChooseBranchOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseBranchOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
