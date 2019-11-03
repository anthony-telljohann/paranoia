import { Game } from './game'
import { Player } from './player'
import { Players } from './players'

describe(`Feature: join game`, () => {
  let game: Game
  let player: Player

  beforeEach(() => {
    game = new Game()
    player = new Player()
  })

  describe(`Scenario: Player joins Game`, () => {
    describe(`When Player joins Game`, () => {
      beforeEach(() => {
        player.join(game)
      })
      describe(`Then`, () => {
        describe(`Game`, () => {
          it(`should contain Player`, () => {
            expect(game.players).toContainEqual(player)
          })
        })
      })
    })
  })
  describe(`Scenario: Player can't join Game`, () => {
    describe(`Given a Game with 5 players`, () => {
      beforeEach(() => {
        do {
          new Player().join(game)
        } while (game.players.size < Players.MAXIMUM_SIZE)
      })
      describe(`When Player joins Game`, () => {
        beforeEach(() => {
          player.join(game)
        })
        describe(`Then`, () => {
          describe(`Game`, () => {
            it(`should not contain Player`, () => {
              expect(game.players).not.toContain(player)
            })
          })
        })
      })
    })
  })
})
