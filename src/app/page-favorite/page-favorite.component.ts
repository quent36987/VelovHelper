import { Component } from '@angular/core';
import { Station } from '../Station';

@Component({
  selector: 'app-page-favorite',
  templateUrl: './page-favorite.component.html',
  styleUrls: ['./page-favorite.component.css'],
})
export class PageFavoriteComponent {
  stations: Station[] = [
    {
      id: 0,
      name: 'MAcodo AZ fezf45 dsfsdf',

      bikes: 10,
      slots: 2,
    },
    {
      id: 0,
      name: 'MAcodosdf',

      bikes: 10,
      slots: 2,
    },
    {
      id: 0,
      name: 'MAcosdfgdfsfsdf',

      bikes: 0,
      slots: 20,
    },
  ];
}
