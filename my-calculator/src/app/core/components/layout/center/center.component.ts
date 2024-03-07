import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center',
  standalone: true,
  templateUrl: './center.component.html',
  styles: [],
})
export class CenterComponents {
  constructor() {}
  ngOnInit() {}
  @Input() class = '';
}
