import { Post } from "./post.interface";

export enum Friendship {
  undefined = 0,
  friends = 1,
}

export enum Online {
  offline = 0,
  online = 1,
}

export interface User {
  id: string,
  name: string,
  img?: string,
  background?: string,
  groups: string[],
  posts: Post[],
  friends: string[],
  games: string[],
  description: string,
  friendship: Friendship,
  online?: Online
  links?: {
    steam?: string,
    origin?: string,
    battlenet?: string,
    epic?: string,
    spotify?: string,
    gog?: string,
    riot?: string,
    reddit?: string,
    discord?: string,
    facebook?: string,
    mail?: string,
  },
}
