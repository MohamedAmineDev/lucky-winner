import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinwheelgameComponent } from './winwheelgame.component';

describe('WinwheelgameComponent', () => {
  let component: WinwheelgameComponent;
  let fixture: ComponentFixture<WinwheelgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinwheelgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinwheelgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
