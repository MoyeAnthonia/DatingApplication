import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guard/auth-guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

const routes: Routes = [

  { path: '',    component: HomeComponent },

  {    path: '',   runGuardsAndResolvers: 'always', canActivate: [AuthGuard],
    children: [
      {  path: 'members',  component: MemberListComponent },
      {  path: 'members/:id', component: MemberDetailComponent   },
      {  path: 'messages', component: MessagesComponent   },
      {  path: 'lists',    component: ListComponent      },
    ]
  },
  {  path: '**',  redirectTo: '',  pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }