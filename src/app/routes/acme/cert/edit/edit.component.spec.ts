import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeCertEditComponent } from './edit.component';

describe('AcmeCertEditComponent', () => {
  let component: AcmeCertEditComponent;
  let fixture: ComponentFixture<AcmeCertEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcmeCertEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeCertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
