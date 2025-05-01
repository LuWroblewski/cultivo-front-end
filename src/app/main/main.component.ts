import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, DrawerComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
