import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importação dos componentes
import { HomeComponent } from './Pages/home/home.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'experience', component: ExperienceComponent },
  {path: 'footer', component: FooterComponent}
];


