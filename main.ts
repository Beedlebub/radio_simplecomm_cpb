enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    radio.sendMessage(RadioMessage.message1)
    light.showAnimation(light.rainbowAnimation, 1000)
    light.clear()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    radio.sendMessage(RadioMessage.message2)
    light.showAnimation(light.colorWipeAnimation, 1000)
    light.clear()
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    light.setAll(0x007fff)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    light.setAll(0xff0000)
})
radio.setGroup(1)
