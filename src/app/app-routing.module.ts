import { ServicesComponent } from './views/services/services.component';
import { OurMagazineComponent } from './views/our-magazine/our-magazine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { HomeComponent } from './views/home/home.component';
import { MultimediaComponent } from './views/multimedia/multimedia.component';
import { CommunityComponent } from './views/community/community.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

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
