import { Voting } from "./post.interface";


export interface Comment {
  author: {
    name: string,
    avatar?: string,
  },
  date: number,
  content: string,
  votingCount: number,
  hasVoted: Voting,
  replies: Comment[],
  showForm?: boolean // panel property
}

