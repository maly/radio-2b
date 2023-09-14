input.onButtonPressed(Button.A, function () {
    bod.move(1)
    radio.sendString("" + (XY_na_text(bod.get(LedSpriteProperty.X), bod.get(LedSpriteProperty.Y))))
})
radio.onReceivedString(function (receivedString) {
    bod.set(LedSpriteProperty.X, parseFloat(receivedString.charAt(0)))
    bod.set(LedSpriteProperty.Y, parseFloat(receivedString.charAt(1)))
})
input.onButtonPressed(Button.B, function () {
    bod.turn(Direction.Right, 90)
})
function XY_na_text (X: number, Y: number) {
    return "" + convertToText(X) + convertToText(Y)
}
let bod: game.LedSprite = null
radio.setGroup(1)
bod = game.createSprite(2, 2)
basic.forever(function () {
	
})
