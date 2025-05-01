import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChartNoAxesColumn } from '@ng-icons/lucide';

@Component({
  selector: 'app-drawer',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideChartNoAxesColumn })],

  templateUrl: './drawer.component.html',
})
export class DrawerComponent {
  readonly FileIcon = File;
}
