import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeAccountComponent } from './account.component';

describe('AcmeAccountComponent', () => {
  let component: AcmeAccountComponent;
  let fixture: ComponentFixture<AcmeAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcmeAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
