import { Component, Output, EventEmitter } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSprout } from '@ng-icons/lucide';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Crop } from '../../types/types';
import { MenuTableCropsComponent } from '../menu-table-crops/menu-table-crops.component';

@Component({
  selector: 'app-modal-add-crop',
  imports: [NgIcon, ReactiveFormsModule, CommonModule],
  viewProviders: [provideIcons({ lucideSprout })],
  templateUrl: './modal-add-crop.component.html',
})
export class ModalAddCropComponent {
  @Output() cropAdded = new EventEmitter<void>();
  form: FormGroup;

  constructor(private form_add_crop: FormBuilder, private http: HttpClient) {
    this.form = this.form_add_crop.group({
      plant_name: ['', [Validators.required, Validators.maxLength(100)]],
      bed_column: ['', [Validators.required, Validators.maxLength(10)]],
      number: [null, [Validators.required, Validators.max(10)]],
      origin_id: [null, [Validators.required]],
      source_crop_id: ['', []],
      production_cycle_grams: [null, [Validators.min(0)]],
      notes: ['', []],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const payload = { ...this.form.value };

      if (!payload.source_crop_id) {
        delete payload.source_crop_id;
      }

      this.http.post(`${environment.API_URL}/crop`, payload).subscribe({
        next: (res) => {
          console.log('Sucesso ao enviar!', res);
          this.cropAdded.emit();
          this.form.reset();
        },
        error: (err) => {
          console.error('Erro ao enviar:', err);
        },
      });
    } else {
      console.log('Formulário inválido');
      this.form.markAllAsTouched();
    }
  }
}
