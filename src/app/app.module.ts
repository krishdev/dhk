import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

/**
* Import Pages Here
*/
import { HomeComponent } from '../components/home/home';
import { SearchComponent } from '../components/search/search';
import { SearchResultsComponent } from '../components/search-results/search-results';
import { ProfileComponent } from '../components/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { KitchenService } from './services/kitchen.service';

@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    ProfileComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    ProfileComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    KitchenService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
