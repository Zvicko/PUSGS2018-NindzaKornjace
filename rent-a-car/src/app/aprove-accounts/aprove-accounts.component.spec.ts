import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveAccountsComponent } from './aprove-accounts.component';

describe('AproveAccountsComponent', () => {
  let component: AproveAccountsComponent;
  let fixture: ComponentFixture<AproveAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
