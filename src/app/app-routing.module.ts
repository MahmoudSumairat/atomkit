import { ServicesComponent } from './pages/services/services.component';
import { OurMagazineComponent } from './pages/our-magazine/our-magazine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { CommunityComponent } from './pages/community/community.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'magazine', component: OurMagazineComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactUs', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
