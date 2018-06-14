import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveServicesComponent } from './aprove-services.component';

describe('AproveServicesComponent', () => {
  let component: AproveServicesComponent;
  let fixture: ComponentFixture<AproveServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
