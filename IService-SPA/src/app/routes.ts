import { OpenCallsComponent } from './open-calls/open-calls.component';
import { SerivceCallsComponent } from './serivce-calls/serivce-calls.component';
import { HomeComponent } from './home/home.component';
import { Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'calls', component: SerivceCallsComponent },
            { path: 'open', component: OpenCallsComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
