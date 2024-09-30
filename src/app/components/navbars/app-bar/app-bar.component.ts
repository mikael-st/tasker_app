import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBellSolid } from '@ng-icons/heroicons/solid';
import { Avatar } from '../../avatar/avatar.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    NgIconComponent,
    Avatar
  ],
  providers: [ provideIcons({ heroBellSolid }) ],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBar {

}
