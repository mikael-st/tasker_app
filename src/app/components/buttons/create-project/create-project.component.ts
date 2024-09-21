import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlusSmallSolid, heroPlusSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'create-project-btn',
  standalone: true,
  imports: [
    NgIconComponent
  ],
  providers: [
    provideIcons({
      heroPlusSolid
    })
  ],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectButton {

}
