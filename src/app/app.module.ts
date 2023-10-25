import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PageFavoriteComponent } from './page-favorite/page-favorite.component';
import { PageLocationComponent } from './page-location/page-location.component';
import { PageSearchComponent } from './page-search/page-search.component';
import { StationComponent } from './station/station.component';
import { PageStationComponent } from './page-station/page-station.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    PageFavoriteComponent,
    PageLocationComponent,
    PageSearchComponent,
    StationComponent,
    PageStationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
