import { MemberListResolver } from './_resolvers/member-listl.resolver copy';
import { MemberListComponent } from './members/member-list/member-list.component';
import { OpenCallsComponent } from './open-calls/open-calls.component';
import { SerivceCallsComponent } from './serivce-calls/serivce-calls.component';
import { HomeComponent } from './home/home.component';
import { Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
      { path: 'members/:id', component: MemberDetailComponent,
        resolve: {user: MemberDetailResolver} },
      { path: 'calls', component: SerivceCallsComponent },
      { path: 'open', component: OpenCallsComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
