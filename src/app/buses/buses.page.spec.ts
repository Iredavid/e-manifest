import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusesPage } from './buses.page';

describe('BusesPage', () => {
  let component: BusesPage;
  let fixture: ComponentFixture<BusesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
