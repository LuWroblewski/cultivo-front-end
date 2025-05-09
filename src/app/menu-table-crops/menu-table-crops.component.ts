import { Component, EventEmitter, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSprout, lucideSearch } from '@ng-icons/lucide';
import { ModalAddCropComponent } from '../modal-add-crop/modal-add-crop.component';

@Component({
  selector: 'app-menu-table-crops',
  imports: [NgIcon, ModalAddCropComponent],
  viewProviders: [provideIcons({ lucideSprout, lucideSearch })],

  templateUrl: './menu-table-crops.component.html',
})
export class MenuTableCropsComponent {
  @Output() cropAdded = new EventEmitter<void>();

  CropAdded() {
    this.cropAdded.emit();
  }
}
