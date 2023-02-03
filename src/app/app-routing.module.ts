import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';



const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'about-me', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit-project/:id', component: EditComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/:id' , component: ProjectComponent},
  {path: 'slider' , component: SliderComponent},
  {path: '**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const AppRoutingProviders: any[] = []; 
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);     