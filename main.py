def ยิง():
    global ความเร็ว
    if กระสุน.is_touching(ยาน):
        game.add_score(1)
        กระสุน.delete()
        ความเร็ว = ความเร็ว + -10
        สร้างยาน()
    elif กระสุน.get(LedSpriteProperty.Y) == 0:
        กระสุน.delete()

def on_button_pressed_a():
    global กระสุน
    กระสุน = game.create_sprite(ปืน.get(LedSpriteProperty.X), ปืน.get(LedSpriteProperty.Y))
    กระสุน.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def นับคะแนน():
    game.game_over()
    basic.show_number(game.score())
def สร้างยาน():
    global ยาน
    if ยาน == ยาน:
        if ยาน.get(LedSpriteProperty.X) == 0:
            ยาน.delete()
            ยาน = game.create_sprite(randint(1, 4), 0)
        elif ยาน.get(LedSpriteProperty.X) == 1:
            while ยาน.get(LedSpriteProperty.X) == 1:
                ยาน.delete()
                ยาน = game.create_sprite(randint(0, 4), 0)
        elif ยาน.get(LedSpriteProperty.X) == 2:
            while ยาน.get(LedSpriteProperty.X) == 2:
                ยาน.delete()
                ยาน = game.create_sprite(randint(0, 4), 0)
        elif ยาน.get(LedSpriteProperty.X) == 3:
            while ยาน.get(LedSpriteProperty.X) == 3:
                ยาน.delete()
                ยาน = game.create_sprite(randint(0, 4), 0)
        elif ยาน.get(LedSpriteProperty.X) == 4:
            while ยาน.get(LedSpriteProperty.X) == 4:
                ยาน.delete()
                ยาน = game.create_sprite(randint(0, 4), 0)

def on_button_pressed_b():
    global กระสุน
    กระสุน = game.create_sprite(ปืน.get(LedSpriteProperty.X), ปืน.get(LedSpriteProperty.Y))
    กระสุน.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

กระสุน: game.LedSprite = None
ยาน: game.LedSprite = None
ปืน: game.LedSprite = None
ความเร็ว = 0
ความเร็ว = 200
ปืน = game.create_sprite(2, 4)
ยาน = game.create_sprite(randint(0, 4), 0)
ตาย = 0
game.start_countdown(10000)

def on_forever():
    ปืน.move(1)
    ปืน.if_on_edge_bounce()
    if กระสุน:
        กระสุน.move(1)
        ยิง()
    basic.pause(ความเร็ว)
basic.forever(on_forever)
