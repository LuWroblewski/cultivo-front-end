import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTableCropsComponent } from './menu-table-crops.component';

describe('MenuTableCropsComponent', () => {
  let component: MenuTableCropsComponent;
  let fixture: ComponentFixture<MenuTableCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTableCropsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTableCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
