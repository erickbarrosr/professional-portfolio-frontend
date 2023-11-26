import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TechnologiesComponent } from './components/pages/technologies/technologies.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ExperiencesComponent } from './components/pages/experiences/experiences.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experiences', component: ExperiencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
