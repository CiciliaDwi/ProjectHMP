import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyTeamPage } from './applyteam.page';

describe('ApplyteamPage', () => {
  let component: ApplyTeamPage;
  let fixture: ComponentFixture<ApplyTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApplyTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
