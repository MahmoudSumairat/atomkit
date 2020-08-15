import { AboutUsComponent } from './views/about-us/about-us.component';
import { HomeComponent } from './views/home/home.component';
import { ItemComponent } from './components/carousel/item/item.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { OurMagazineComponent } from './views/our-magazine/our-magazine.component';
import { MultimediaComponent } from './views/multimedia/multimedia.component';
import { CommunityComponent } from './views/community/community.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

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
