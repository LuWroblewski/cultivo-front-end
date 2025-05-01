import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsMainComponent } from './crops-main.component';

describe('CropsMainComponent', () => {
  let component: CropsMainComponent;
  let fixture: ComponentFixture<CropsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
