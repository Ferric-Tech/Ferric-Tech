import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsScreen } from './projects.screen';

describe('ProjectsComponent', () => {
  let component: ProjectsScreen;
  let fixture: ComponentFixture<ProjectsScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsScreen],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
