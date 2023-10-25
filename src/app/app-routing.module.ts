import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFavoriteComponent } from './page-favorite/page-favorite.component';
import { PageLocationComponent } from './page-location/page-location.component';
import { PageSearchComponent } from './page-search/page-search.component';
import { PageStationComponent } from './page-station/page-station.component';

const routes: Routes = [
  { path: 'favorite', component: PageFavoriteComponent },
  { path: '', redirectTo: '/favorite', pathMatch: 'full' },
  { path: 'location', component: PageLocationComponent },
  { path: 'search', component: PageSearchComponent },
  { path: 'station/:id', component: PageStationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
