import { Routes } from '@angular/router';
import { LoginPage } from '../pages/login-page/login-page.component';
import { Home } from '../pages/home/home.component';
import { Workspace } from '../components/workspace/workspace.component';
import { Projects } from '../components/projects/projects.component';
import { Inbox } from '../components/inbox/inbox.component';
import { Affiliations } from '../components/affiliations/affiliations.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    component: LoginPage
  },
  {
    path: 'home',
    component: Home,
    children: [
      {
        path: 'workspace',
        component: Workspace
      },
      {
        path: 'projects',
        component: Projects
      },
      {
        path: 'inbox',
        component: Inbox
      },
      {
        path: 'affiliations',
        component: Affiliations
      }
    ]
  }
]