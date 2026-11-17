controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(randint(-150, 150), randint(-150, 150))
    mySprite.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    otherSprite.setPosition(randint(20, 140), randint(20, 100))
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
info.startCountdown(30)
let Star = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . b 5 5 5 b . . . . . 
    . . . . . b b 5 5 5 b b . . . . 
    . . b b b b 5 5 5 1 1 b b b b . 
    . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b d d 5 5 5 5 5 d d b . . 
    . . . c b 5 5 5 5 5 5 5 b c . . 
    . . . c b 5 5 5 5 5 5 5 b c . . 
    . . . c 5 5 d d b d d 5 5 c . . 
    . . . c 5 d d c c c d d 5 c . . 
    . . . c c c c . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Star.setPosition(randint(20, 140), randint(20, 100))
