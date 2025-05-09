import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCropComponent } from './modal-add-crop.component';

describe('ModalAddCropComponent', () => {
  let component: ModalAddCropComponent;
  let fixture: ComponentFixture<ModalAddCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAddCropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
