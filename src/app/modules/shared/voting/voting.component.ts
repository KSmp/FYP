import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Voting } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  @Input() votingCount: number
  @Input() hasVoted: Voting
  @Input() isSmall: boolean = false
  @Output() changeVote = new EventEmitter<Voting>()

  readonly Voting = Voting

  constructor() { }

  ngOnInit(): void {}

  vote(vote: Voting): void {
    let newVote: Voting

    if (vote === this.hasVoted) {
      newVote = Voting.undefined

      if (vote === Voting.minus) {
        this.votingCount++
      } else {
        this.votingCount--
      }
    } else {
      newVote = vote

      if (this.hasVoted === Voting.undefined) {
        if (vote === Voting.minus) {
          this.votingCount--
        } else {
          this.votingCount++
        }
      } else {
        if (vote === Voting.minus) {
          this.votingCount -= 2
        } else {
          this.votingCount += 2
        }
      }
    }
    
    this.hasVoted = newVote
    this.changeVote.emit(newVote)
  }
}
