import { Post } from "./post.interface";

export enum AccessLevel {
  undefined = 0,
  public,
  private,
  secret,
}

export interface Group {
  slug: string,
  name: string,
  img?: string,
  usersCount: number,
  access: AccessLevel,
  games: string[],
  description: string,
  background?: string,
  posts: Post[],
  owner: string,
  users: string[],
}

