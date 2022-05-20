import { Comment } from './comments.interface'
import { SimpleUser } from './simple-user.interface'

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
  author: SimpleUser,
  comments?: Comment[]
}

