import { Voting } from "./post.interface";
import { SimpleUser } from "./simple-user.interface";


export interface Comment {
  author: SimpleUser,
  date: number,
  content: string,
  votingCount: number,
  hasVoted: Voting,
  replies: Comment[],
  showForm?: boolean, // panel property
}

