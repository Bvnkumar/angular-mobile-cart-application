import { Component, Output, EventEmitter } from '@angular/core';

interface RatingOption {
  id: number;
  valid: boolean;
}

@Component({
  selector:'rating',
  templateUrl:'./rating.component.html',
  styleUrls:['./rating.component.scss']
})
export class RatingBar {
  given_rate = 0;
  @Output() rating = new EventEmitter<number>();
  limit: RatingOption[] = [
    { id: 1, valid: false },
    { id: 2, valid: false },
    { id: 3, valid: false },
    { id: 4, valid: false },
    { id: 5, valid: false }
  ];

  getRating(selectedId: number): void {
    this.given_rate = selectedId;
    this.rating.emit(selectedId);
    this.limit = this.limit.map(option => ({
      ...option,
      valid: option.id <= selectedId
    }));
  }
}
