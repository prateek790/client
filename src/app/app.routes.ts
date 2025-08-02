import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MemberListComponent } from './features/members/member-list/member-list.component';
import { MemberDetailedComponent } from './features/members/member-detailed/member-detailed.component';
import { MessagesComponent } from './features/messages/messages.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'members', component: MemberListComponent},
    {path : 'members/:id', component: MemberDetailedComponent},
    {path: 'list', component: MemberListComponent},
    {path: 'messages', component: MessagesComponent},
    {path: '**', component: HomeComponent}
];

 