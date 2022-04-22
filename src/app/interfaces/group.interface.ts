export enum AccessLevel {
  undefined = 0,
  public,
  private,
  secret,
}

export interface Group {
  id: string,
  name: string,
  usersCount: number,
  access: AccessLevel,
  games: string[],
  isInvited: boolean,
  isOfficial: boolean,
  isGame: boolean,
}

