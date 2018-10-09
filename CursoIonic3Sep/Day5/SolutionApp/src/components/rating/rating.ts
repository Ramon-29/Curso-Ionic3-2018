import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  @Output() voteSubmitted: EventEmitter<boolean>;

  private upVotes: number;
  private downVotes: number;

  constructor() {

    this.voteSubmitted = new EventEmitter<boolean>();

    this.upVotes = 0;
    this.downVotes = 0;
  }

  upVote() {

    this.upVotes++;
    this.voteSubmitted.emit(true);
  }

  downVote() {

    this.downVotes++;
    this.voteSubmitted.emit(false);
  }
}
