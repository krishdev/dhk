import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';
import { SearchComponent } from './search/search';
import { SearchResultsComponent } from './search-results/search-results';
import { ProfileComponent } from './profile/profile';
@NgModule({
	declarations: [HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    ProfileComponent],
	imports: [],
	exports: [HomeComponent,
    SearchComponent,
    SearchResultsComponent,
    ProfileComponent]
})
export class ComponentsModule {}
