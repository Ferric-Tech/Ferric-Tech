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
import { HomeScreen } from './pages/home/home.screen';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsScreen } from './pages/about-us/about-us.screen';
import { ContactUsScreen } from './pages/contact-us/contact-us.screen';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreen,
    ProjectsComponent,
    CarouselComponent,
    AboutUsScreen,
    ContactUsScreen,
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
