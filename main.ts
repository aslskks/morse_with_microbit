enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (n) {
    if (n == PUNTO) {
        punto()
    } else if (n == RAYA) {
        raya()
    } else if (n == ESPACIO) {
        espacio()
    } else if (n == Finished) {
        finished()
    }
})
function finished () {
    basic.showIcon(IconNames.Square)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.pause(200)
    basic.clearScreen()
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(Finished)
    finished()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(PUNTO)
    punto()
})
function raya () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    music.playTone(880, 300)
    basic.pause(50)
    basic.clearScreen()
}
function punto () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playTone(880, 100)
    basic.pause(50)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(ESPACIO)
    espacio()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(RAYA)
    raya()
})
function espacio () {
    basic.showIcon(IconNames.Diamond)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.pause(50)
    basic.clearScreen()
}
let Finished = 0
let ESPACIO = 0
let PUNTO = 0
let RAYA = 0
RAYA = 1
PUNTO = 2
ESPACIO = 3
Finished = 4
radio.setGroup(67)
