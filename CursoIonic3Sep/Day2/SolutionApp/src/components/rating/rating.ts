import { Component } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  private upVotes: number;

  private downVotes: number;

  constructor() {

    this.upVotes = 0;

    this.downVotes = 0;
  }

  upVote() {

    this.upVotes++;
  }

  downVote() {

    this.downVotes++;
  }
}
