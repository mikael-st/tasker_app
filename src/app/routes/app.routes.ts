import { Route, Routes } from '@angular/router';
import { LoginPage } from '../pages/login-page/login-page.component';
import { Home } from '../pages/home/home.component';
import { Workspace } from '../components/workspace/workspace.component';
import { Projects } from '../components/projects/projects.component';
import { Inbox } from '../components/inbox/inbox.component';
import { Affiliations } from '../components/affiliations/affiliations.component';
import { ProjectPage } from '../components/project-page/project-page.component';
import { OverviewComponent } from '../components/project-page/overview/overview.component';
import { MembersComponent } from '../components/project-page/members/members.component';
import { TasksComponent } from '../components/project-page/tasks/tasks.component';
import { Events } from '../components/project-page/events/events.component';

const ProjectsRoute: Route = {
  path: 'projects',
  component: Projects,
  children: [
    {
      path:'overview',
      component: ProjectPage
    }
  ]
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home/project',
    redirectTo: 'home/project/overview',
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
        component: Projects,
      },
      {
        path: 'project',
        component: ProjectPage,
        children: [
          {
            path: 'overview',
            component: OverviewComponent
          },
          {
            path: 'tasks',
            component: TasksComponent
          },
          {
            path: 'members',
            component:MembersComponent,
          },
          {
            path: 'calendar',
            component: Events
          }
        ],
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