import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component'
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
