import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Crop } from '../../types/types';
import { environment } from '../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { MenuTableCropsComponent } from '../menu-table-crops/menu-table-crops.component';
import { MenuEventsComponent } from '../menu-events/menu-events.component';

@Component({
  selector: 'app-table-crops',
  imports: [CommonModule, MenuTableCropsComponent, MenuEventsComponent],
  templateUrl: './table-crops.component.html',
})
export class TableCropsComponent {
  crops = signal<Crop[]>([]);

  constructor(private http: HttpClient) {}

  loadCrops() {
    this.http.get<ApiResponse>(`${environment.API_URL}/crop`).subscribe({
      next: (response) => {
        this.crops.set(response.data);
        console.log('Culturas carregadas:', response);
      },
      error: (err) => {
        console.error('Erro ao buscar dados:', err);
      },
    });
  }

  ngOnInit() {
    this.loadCrops();
  }
}
