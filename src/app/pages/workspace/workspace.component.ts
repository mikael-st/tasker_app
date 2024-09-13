import { Component } from '@angular/core';
import { AppBar } from '../../components/app-bar/app-bar.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'workspace',
  standalone: true,
  imports: [
    AppBar,
    NavBarComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class Workspace {

}
