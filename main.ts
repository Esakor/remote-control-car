input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
basic.showIcon(IconNames.Ghost)
radio.setGroup(7)
