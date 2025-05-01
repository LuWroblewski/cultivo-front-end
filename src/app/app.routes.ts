import type { Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { CropsMainComponent } from './crops-main/crops-main.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardMainComponent },
  { path: 'crops', component: CropsMainComponent },
];
