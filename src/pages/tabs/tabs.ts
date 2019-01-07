import { Component } from '@angular/core';

import { HomeComponent } from '../../components/home/home';
import { SearchComponent } from '../../components/search/search';
import { StatusComponent } from '../../components/status/status';
import { ProfileComponent } from '../../components/profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomeComponent;
  tab2Root = SearchComponent;
  tab3Root = StatusComponent;
  tab4Root = ProfileComponent;

  constructor() {

  }
}
