import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEventsComponent } from './menu-events.component';

describe('MenuEventsComponent', () => {
  let component: MenuEventsComponent;
  let fixture: ComponentFixture<MenuEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
