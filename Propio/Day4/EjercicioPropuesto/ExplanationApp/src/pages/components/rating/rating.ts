import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'rating',
    templateUrl: 'rating.html'
})

export class RatingComponent {

    private votePositive: number;
    private voteNegative: number;

    @Output() public voteDone = new EventEmitter<boolean>();

    constructor() {
        this.votePositive = 0;
        this.voteNegative = 0;
    }

    fireToastEvent() {
        this.voteDone.emit();
    }

    voteUp() {
        this.votePositive++;
        this.voteDone.emit(true);
    }

    voteDown() {
        this.voteNegative++;
        this.voteDone.emit(false);
    }



}
