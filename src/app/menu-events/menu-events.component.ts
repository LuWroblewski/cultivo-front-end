import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendarPlus } from '@ng-icons/lucide';

@Component({
  selector: 'app-menu-events',
  imports: [NgIcon, CommonModule],
  viewProviders: [provideIcons({ lucideCalendarPlus })],
  templateUrl: './menu-events.component.html',
})
export class MenuEventsComponent {}
