radio.onReceivedNumber(function (n) {
    if (n == PING) {
        radio.sendNumber(PONG)
    }
    if (n == PONG) {
        canalEncontrado = true
        basic.showIcon(IconNames.Yes)
    }
    if (n == PUNTO) {
        punto()
    } else if (n == RAYA) {
        raya()
    } else if (n == ESPACIO) {
        espacio()
    } else if (n == FINISHED) {
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
    radio.sendNumber(FINISHED)
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
input.onGesture(Gesture.ScreenDown, function () {
    buscarCanal()
})
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
function buscarCanal () {
    canalEncontrado = false
    for (let i = 0; i <= 254; i++) {
        if (canalEncontrado) {
            break;
        }
        canalActual = i
        radio.setGroup(i)
        radio.sendNumber(PING)
        basic.showNumber(i)
    }
    if (!(canalEncontrado)) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
        radio.setGroup(1)
    }
}
function espacio () {
    basic.showIcon(IconNames.Diamond)
    music.playTone(880, 50)
    basic.pause(50)
    basic.clearScreen()
}
let canalActual = 0
let canalEncontrado = false
let PONG = 0
let PING = 0
let FINISHED = 0
let ESPACIO = 0
let PUNTO = 0
let RAYA = 0
RAYA = 1
PUNTO = 2
ESPACIO = 3
FINISHED = 4
PING = 10
PONG = 11
