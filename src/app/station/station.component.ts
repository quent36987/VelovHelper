import { Component, Input } from '@angular/core';
import { Station } from '../Station';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css'],
})
export class StationComponent {
  @Input() station: Station | undefined;
}
