function ยิง () {
    if (กระสุน.isTouching(ยาน)) {
        game.addScore(1)
        กระสุน.delete()
        ความเร็ว = ความเร็ว + -1
        สร้างยาน()
        เช็คปืน = true
        ชีวิต = ชีวิต + 1
    } else if (กระสุน.get(LedSpriteProperty.Y) == 0) {
        กระสุน.delete()
        เช็คปืน = true
    }
}
input.onButtonPressed(Button.A, function () {
    if (เช็คปืน) {
        กระสุน = game.createSprite(ปืน.get(LedSpriteProperty.X), ปืน.get(LedSpriteProperty.Y))
        กระสุน.turn(Direction.Left, 90)
        เช็คปืน = false
        ชีวิต = ชีวิต - 1
    }
    if (ชีวิต <= 2) {
        ตาย()
    }
})
function ตาย () {
    if (เตือน) {
        basic.showIcon(IconNames.Heart)
        เตือน = false
    }
    if (ชีวิต == 0) {
        game.gameOver()
    }
}
function สร้างยาน () {
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
}
input.onButtonPressed(Button.B, function () {
    if (เช็คปืน) {
        กระสุน = game.createSprite(ปืน.get(LedSpriteProperty.X), ปืน.get(LedSpriteProperty.Y))
        กระสุน.turn(Direction.Left, 90)
        เช็คปืน = false
        ชีวิต = ชีวิต - 1
    }
    if (ชีวิต <= 1) {
        ตาย()
    }
})
let กระสุน: game.LedSprite = null
let เตือน = false
let ชีวิต = 0
let เช็คปืน = false
let ยาน: game.LedSprite = null
let ปืน: game.LedSprite = null
let ความเร็ว = 0
ความเร็ว = 200
ปืน = game.createSprite(2, 4)
ยาน = game.createSprite(randint(0, 4), 0)
เช็คปืน = true
ชีวิต = 5
เตือน = true
basic.forever(function () {
    ปืน.move(1)
    ปืน.ifOnEdgeBounce()
    if (กระสุน) {
        กระสุน.move(1)
        ยิง()
    }
    basic.pause(ความเร็ว)
})
