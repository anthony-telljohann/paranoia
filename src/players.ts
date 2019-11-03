import { Player } from './player'
export class Players extends Set<Player> {
  public static MAXIMUM_SIZE = 5
  public add(player: Player): this {
    if (super.size < Players.MAXIMUM_SIZE) {
      super.add(player)
    }
    return this
  }
}
