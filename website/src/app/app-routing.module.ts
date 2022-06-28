import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { ContactUsScreen } from './pages/contact-us/contact-us.screen';
import { HomeScreen } from './pages/home/home.screen';
import { ProjectsScreen } from './pages/projects/projects.screen';

const routes: Routes = [
  { path: '', component: HomeScreen },
  { path: 'projects', component: ProjectsScreen },
  { path: 'about', component: AboutUsPage },
  { path: 'contact', component: ContactUsScreen },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
