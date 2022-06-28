import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsScreen } from './pages/about-us/about-us.screen';
import { ContactUsScreen } from './pages/contact-us/contact-us.screen';
import { HomeScreen } from './pages/home/home.screen';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeScreen },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutUsScreen },
  { path: 'contact', component: ContactUsScreen },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
