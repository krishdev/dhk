import { Component } from '@angular/core';

import { HomeComponent } from '../../components/home/home';
import { SearchComponent } from '../../components/search/search';
import { SearchResultsComponent } from '../../components/search-results/search-results';
import { ProfileComponent } from '../../components/profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomeComponent;
  tab2Root = SearchComponent;
  tab3Root = SearchResultsComponent;
  tab4Root = ProfileComponent;

  constructor() {

  }
}
