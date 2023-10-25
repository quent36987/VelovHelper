import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() selected: boolean = false;
  @Input() name: string = '';

  @Output() Onclick = new EventEmitter();

  onClick() {
    this.Onclick.emit();
  }

}
