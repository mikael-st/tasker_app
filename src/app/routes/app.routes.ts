import { Routes } from '@angular/router';
import { LoginPage } from '../pages/login-page/login-page.component';
import { Workspace } from '../pages/workspace/workspace.component';
import { HomeComponent } from '../components/home/home.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { InboxComponent } from '../components/inbox/inbox.component';
import { AffiliationsComponent } from '../components/affiliations/affiliations.component';

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
    path: 'workspace',
    component: Workspace,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'affiliations',
        component: AffiliationsComponent
      }
    ]
  }
]