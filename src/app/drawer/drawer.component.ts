import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideChartNoAxesColumn,
  lucideMenu,
  lucideSprout,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-drawer',
  imports: [NgIcon, RouterLink],
  viewProviders: [
    provideIcons({ lucideChartNoAxesColumn, lucideMenu, lucideSprout }),
  ],

  templateUrl: './drawer.component.html',
})
export class DrawerComponent {
  readonly FileIcon = File;
}
