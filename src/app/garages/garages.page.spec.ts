import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaragesPage } from './garages.page';

describe('GaragesPage', () => {
  let component: GaragesPage;
  let fixture: ComponentFixture<GaragesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
