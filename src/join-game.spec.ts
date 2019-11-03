import { Game } from './game'
import { Player } from './player'

describe(`Feature: join game`, () => {
  const game = new Game()
  const player = new Player()
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
})
