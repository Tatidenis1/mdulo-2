input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    basic.pause(5000)
    basic.clearScreen()
    basic.pause(2000)
    basic.showNumber(randint(1, 6))
})
