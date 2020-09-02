import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homedir } from 'os';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
