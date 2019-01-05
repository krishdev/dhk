import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/**
* Import Pages Here
*/
import { HomeComponent } from '../components/home/home';
import { SearchComponent } from '../components/search/search';
import { SearchResultsComponent } from '../components/search-results/search-results';
import { StatusComponent } from '../components/status/status';
import { ProfileComponent } from '../components/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    StatusComponent,
    ProfileComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    StatusComponent,
    ProfileComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
