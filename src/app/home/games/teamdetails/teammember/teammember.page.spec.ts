import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeammemberPage } from './teammember.page';

describe('TeammemberPage', () => {
  let component: TeammemberPage;
  let fixture: ComponentFixture<TeammemberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeammemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
