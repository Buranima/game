function ยิง () {
    if (กระสุน.isTouching(ยาน)) {
        กระสุน.delete()
        if (ยาน == ยาน) {
            if (ยาน.get(LedSpriteProperty.X) == 0) {
                ยาน.delete()
                ยาน = game.createSprite(randint(1, 4), 0)
            } else if (ยาน.get(LedSpriteProperty.X) == 1) {
                while (ยาน.get(LedSpriteProperty.X) == 1) {
                    ยาน.delete()
                    ยาน = game.createSprite(randint(0, 4), 0)
                }
            } else if (ยาน.get(LedSpriteProperty.X) == 2) {
                while (ยาน.get(LedSpriteProperty.X) == 2) {
                    ยาน.delete()
                    ยาน = game.createSprite(randint(0, 4), 0)
                }
            } else if (ยาน.get(LedSpriteProperty.X) == 3) {
                while (ยาน.get(LedSpriteProperty.X) == 3) {
                    ยาน.delete()
                    ยาน = game.createSprite(randint(0, 4), 0)
                }
            } else if (ยาน.get(LedSpriteProperty.X) == 4) {
                while (ยาน.get(LedSpriteProperty.X) == 4) {
                    ยาน.delete()
                    ยาน = game.createSprite(randint(0, 4), 0)
                }
            }
        }
    } else if (กระสุน.get(LedSpriteProperty.Y) == 0) {
        กระสุน.delete()
    }
}
input.onButtonPressed(Button.A, function () {
    กระสุน = game.createSprite(ปืน.get(LedSpriteProperty.X), ปืน.get(LedSpriteProperty.Y))
    กระสุน.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    กระสุน = game.createSprite(ปืน.get(LedSpriteProperty.X), ปืน.get(LedSpriteProperty.Y))
    กระสุน.turn(Direction.Left, 90)
})
let กระสุน: game.LedSprite = null
let ยาน: game.LedSprite = null
let ปืน: game.LedSprite = null
ปืน = game.createSprite(2, 4)
ยาน = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    ปืน.move(1)
    ปืน.ifOnEdgeBounce()
    if (กระสุน) {
        กระสุน.move(1)
        ยิง()
    }
    basic.pause(200)
})
