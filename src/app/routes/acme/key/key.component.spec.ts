import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeKeyComponent } from './key.component';

describe('AcmeKeyComponent', () => {
  let component: AcmeKeyComponent;
  let fixture: ComponentFixture<AcmeKeyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcmeKeyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
