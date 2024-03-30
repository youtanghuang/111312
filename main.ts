radio.onReceivedNumber(function (receivedNumber) {
    list = [1, 2, 3]
    對方 = list[randint(0, 2)]
    if (對方 == 1) {
        basic.showIcon(IconNames.Scissors)
    }
    if (對方 == 2) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (對方 == 3) {
        basic.showIcon(IconNames.Square)
    }
    basic.pause(500)
    if (receivedNumber == 1 && 對方 == 1) {
        basic.showString("=")
    }
    if (receivedNumber == 1 && 對方 == 2) {
        basic.showString("W")
    }
    if (receivedNumber == 1 && 對方 == 3) {
        basic.showString("L")
    }
    if (receivedNumber == 2 && 對方 == 1) {
        basic.showString("L")
    }
    if (receivedNumber == 2 && 對方 == 2) {
        basic.showString("=")
    }
    if (receivedNumber == 2 && 對方 == 3) {
        basic.showString("W")
    }
    if (receivedNumber == 3 && 對方 == 1) {
        basic.showString("W")
    }
    if (receivedNumber == 3 && 對方 == 2) {
        basic.showString("L")
    }
    if (receivedNumber == 3 && 對方 == 3) {
        basic.showString("=")
    }
})
input.onButtonPressed(Button.A, function () {
    我方 = 1
    radio.sendNumber(1)
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.AB, function () {
    我方 = 3
    radio.sendNumber(3)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    我方 = 2
    radio.sendNumber(2)
    basic.showIcon(IconNames.SmallSquare)
})
let 我方 = 0
let 對方 = 0
let list: number[] = []
radio.setGroup(5)
