import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeKeyEditComponent } from './edit.component';

describe('AcmeKeyEditComponent', () => {
  let component: AcmeKeyEditComponent;
  let fixture: ComponentFixture<AcmeKeyEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcmeKeyEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeKeyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
