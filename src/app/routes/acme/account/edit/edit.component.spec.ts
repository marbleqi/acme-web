import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeAccountEditComponent } from './edit.component';

describe('AcmeAccountEditComponent', () => {
  let component: AcmeAccountEditComponent;
  let fixture: ComponentFixture<AcmeAccountEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcmeAccountEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeAccountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
