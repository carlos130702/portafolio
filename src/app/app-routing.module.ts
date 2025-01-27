import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ProfileComponent} from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'proyectos', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
