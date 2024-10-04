import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBellSolid, heroClipboardSolid } from '@ng-icons/heroicons/solid';
import { Avatar } from '../../misc/avatar/avatar.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    NgIconComponent,
    Avatar
  ],
  providers: [ 
    provideIcons({ 
      heroBellSolid,
      heroClipboardSolid
    })
  ],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBar {

}
