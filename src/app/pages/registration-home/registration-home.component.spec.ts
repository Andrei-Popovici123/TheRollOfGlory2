import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationHomeComponent } from './registration-home.component';

describe('RegistrationHomeComponent', () => {
  let component: RegistrationHomeComponent;
  let fixture: ComponentFixture<RegistrationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
