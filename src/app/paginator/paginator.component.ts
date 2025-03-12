import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() totalItems: number = 100;  // Default value, overridden by parent
  @Input() pageSize: number = 20;
}
