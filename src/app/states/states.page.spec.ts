import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatesPage } from './states.page';

describe('StatesPage', () => {
  let component: StatesPage;
  let fixture: ComponentFixture<StatesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
