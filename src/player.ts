import { Game } from './game'

export class Player {
  public join(game: Game) {
    game.players.add(this)
    return this
  }
}
