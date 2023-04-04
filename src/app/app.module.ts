import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { UtgcearlydaysComponent } from './utgcearlydays/utgcearlydays.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActivitiesComponent } from './activities/activities.component';
import { GallaryDirective } from './gallary.directive';
import { ContactusComponent } from './contactus/contactus.component';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MainslideimagesComponent } from './mainslideimages/mainslideimages.component';
import { LogoandaddsComponent } from './logoandadds/logoandadds.component';
import { BotengComponent } from './boteng/boteng.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import { CardsComponent } from './cards/cards.component';
import { PrayerrequestComponent } from './prayerrequest/prayerrequest.component';
import { Utgc2006Component } from './utgc2006/utgc2006.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    GalleryComponent,
    UtgcearlydaysComponent,
    ActivitiesComponent,
    GallaryDirective,
    ContactusComponent,
    MainslideimagesComponent,
    LogoandaddsComponent,
    BotengComponent,
    FooterComponent,
    CardsComponent,
    PrayerrequestComponent,
    Utgc2006Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,MatInputModule
    , MatIconModule,
    FormsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}