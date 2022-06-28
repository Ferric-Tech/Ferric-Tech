// Angular primary inports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angualar material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Components - Pages
import { HomePage } from './pages/home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { ContactUsPage } from './pages/contact-us/contact-us.page';

// Components - Screens
import { PlainTextScreen } from './screens/plain-text/plain-text.screen';
import { CarouselScreen } from './screens/carousel/carousel.screen';

// Components - Components
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProjectsPage,
    CarouselComponent,
    AboutUsPage,
    ContactUsPage,
    PlainTextScreen,
    CarouselScreen,
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
