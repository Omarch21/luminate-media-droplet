import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button' 
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component'
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { GalleryCard } from './components/gallery/gallery.component';
import { DialogBoxComponent } from './components/dialog/dialogbox/dialogbox.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfComponent } from './components/pdf/pdf.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
   GalleryCard,
   DialogBoxComponent,
   PdfComponent,
   TutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,MatCommonModule,
    MatSidenavModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
