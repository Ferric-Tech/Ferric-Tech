import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsScreen } from './about-us.screen';

describe('AboutUsComponent', () => {
  let component: AboutUsScreen;
  let fixture: ComponentFixture<AboutUsScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsScreen],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
