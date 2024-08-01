import { Routes } from '@angular/router';
import { LoginPage } from '../pages/login-page/login-page.component';
import { Workspace } from '../pages/workspace/workspace.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'workspace', component: Workspace }
]