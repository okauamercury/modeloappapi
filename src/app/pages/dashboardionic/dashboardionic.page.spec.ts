import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardionicPage } from './dashboardionic.page';

describe('DashboardionicPage', () => {
  let component: DashboardionicPage;
  let fixture: ComponentFixture<DashboardionicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
