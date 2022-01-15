import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() public currentPage!: number;
  @Output() public currentPageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  public onClick(): void {
    this.currentPageChange.emit(3)
  }

}
