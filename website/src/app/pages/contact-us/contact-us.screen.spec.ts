import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsScreen } from './contact-us.screen';

describe('ContactUsComponent', () => {
  let component: ContactUsScreen;
  let fixture: ComponentFixture<ContactUsScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsScreen],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
