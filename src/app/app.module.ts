import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './components/carousel/item/item.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { OurMagazineComponent } from './pages/our-magazine/our-magazine.component';
import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { CommunityComponent } from './pages/community/community.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    CarouselComponent,
    ItemComponent,
    AboutUsComponent,
    OurMagazineComponent,
    MultimediaComponent,
    CommunityComponent,
    ServicesComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
