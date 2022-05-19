import { Comment } from './comments.interface'

export enum Voting {
  undefined = 0,
  plus,
  minus,
}

export interface Post {
  id: string,
  title: string,
  content: string,
  votingCount: number,
  isPhoto: boolean,
  img?: string,
  hasVoted: Voting,
  author: {
    name: string,
    avatar?: string,
  },
  comments?: Comment[]
}

