// Angular primary inports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Angualar material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Components
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { ContactUsPage } from './pages/contact-us/contact-us.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProjectsPage,
    CarouselComponent,
    AboutUsPage,
    ContactUsPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
