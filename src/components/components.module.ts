import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { SearchComponent } from './search/search';
import { SearchResultsComponent } from './search-results/search-results';
import { StatusComponent } from './status/status';
import { ProfileComponent } from './profile/profile';
import { HomeLandingComponent } from './home-landing/home-landing';
@NgModule({
	declarations: [HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    StatusComponent,
    ProfileComponent,
    HomeLandingComponent],
	imports: [],
	exports: [HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    StatusComponent,
    ProfileComponent,
    HomeLandingComponent]
})
export class ComponentsModule {}
