import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewapplyteamPage } from './newapplyteam.page';

describe('NewapplyteamPage', () => {
  let component: NewapplyteamPage;
  let fixture: ComponentFixture<NewapplyteamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewapplyteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
