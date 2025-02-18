import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeCertComponent } from './cert.component';

describe('AcmeCertComponent', () => {
  let component: AcmeCertComponent;
  let fixture: ComponentFixture<AcmeCertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcmeCertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
