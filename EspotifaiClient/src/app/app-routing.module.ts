import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {UserPageComponent} from './user-page/user-page.component'
import { AuthGuard } from '../app/guards/auth.guard'

const routes: Routes = [
{ path:'', component:LoginComponent},
{path:'myPlaylists', component:UserPageComponent, canActivate: [AuthGuard]},
{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
