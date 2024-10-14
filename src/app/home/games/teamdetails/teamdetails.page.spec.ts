import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamdetailsPage } from './teamdetails.page';

describe('TeamdetailsPage', () => {
  let component: TeamdetailsPage;
  let fixture: ComponentFixture<TeamdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
