import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: 'rating.html'
})

export class RatingComponent {

    private votePositive: number;
    private voteNegative: number;

    constructor() {
        this.votePositive = 0;
        this.voteNegative = 0;
    }

    voteUp() {
        this.votePositive++;
    }

    voteDown() {
        this.voteNegative++;
    }
}
