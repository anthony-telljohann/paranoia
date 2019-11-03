import { Player } from './player'

export class Game {
  constructor(public readonly players = new Set<Player>()) {}
}
