input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
})
input.onSound(DetectedSound.Loud, function () {
    radio.setGroup(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(3)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
})
basic.showIcon(IconNames.Ghost)
radio.setGroup(7)
