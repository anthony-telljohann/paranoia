import { Players } from './players'

export class Game {
  constructor(public readonly players = new Players()) {}
}
