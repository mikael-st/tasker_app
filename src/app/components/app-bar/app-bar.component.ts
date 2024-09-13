import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBellSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [ provideIcons({ heroBellSolid }) ],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBar {

}
