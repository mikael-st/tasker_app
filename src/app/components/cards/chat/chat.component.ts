import { Component } from '@angular/core';
import { Avatar } from '../../misc/avatar/avatar.component';
import { Team } from '../../team/team.component';

@Component({
  selector: 'chat-card',
  standalone: true,
  imports: [
    Avatar,
    Team
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
