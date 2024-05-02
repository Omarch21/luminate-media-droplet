import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';

const routes: Routes = [
  {
    path: 'gallery',
    component:GalleryComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'checklist',
    component: PdfComponent
  },
  {
    path: 'how-to',
    component:TutorialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
