function CtoF (C: number) {
    return 1.8 * (C + 32)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(CtoF(input.temperature()))
    basic.showNumber(0 + 0)
})
