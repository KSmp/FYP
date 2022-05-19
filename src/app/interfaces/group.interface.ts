export enum AccessLevel {
  undefined = 0,
  public,
  private,
  secret,
}

export interface Group {
  id: string,
  name: string,
  img?: string,
  usersCount: number,
  access: AccessLevel,
  games: string[],
  isInvited: boolean,
  isOfficial: boolean,
  isGame: boolean,
  description: string,
  background?: string,
  tabs?: string[]
}

