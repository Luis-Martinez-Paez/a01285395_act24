input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . # . # .
            . # . . #
            `)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        basic.showIcon(IconNames.Surprised)
        basic.clearScreen()
        basic.pause(100)
    }
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.forever(function () {
	
})
