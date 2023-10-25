import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  icons = [
    { name: 'refresh', selected: false , link: ''},
    { name: 'favorite', selected: true , link: 'favorite'},
    { name: 'location_on', selected: false , link: 'location'},
    { name: 'search', selected: false , link: 'search'}
  ];


  selectIcon(icon: any) {
    this.icons.forEach((icon: any) => {
      icon.selected = false;
    });
    icon.selected = true;
    this.router.navigate([icon.link]);
  }

  constructor(private router: Router) {

  }

}
