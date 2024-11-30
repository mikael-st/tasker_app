import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AppLogo } from '../../components/logo/logo.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { ScaleService } from '../../service/scale.service';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    AppLogo,
    LoginFormComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPage {}
