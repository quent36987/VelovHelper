import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-station',
  templateUrl: './page-station.component.html',
  styleUrls: ['./page-station.component.css'],
})
export class PageStationComponent implements OnInit {
  station: string = 'Station';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.station = 'Station ' + id;
  }
}
