import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {UserPageComponent} from './user-page/user-page.component'

const routes: Routes = [
{ path:'', component:LoginComponent},
{path:'myPlaylists', component:UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
