def on_received_number(n):
    if n == PUNTO:
        punto()
    elif n == RAYA:
        raya()
    elif n == ESPACIO:
        espacio()
    elif n == Finished:
        finished()
radio.on_received_number(on_received_number)

def finished():
    basic.show_icon(IconNames.SQUARE)

def on_button_pressed_a():
    radio.send_number(PUNTO)
    punto()
input.on_button_pressed(Button.A, on_button_pressed_a)

def raya():
    basic.show_leds("""
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        """)
    music.play_tone(880, 300)
    basic.pause(50)
    basic.clear_screen()
def punto():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    music.play_tone(880, 100)
    basic.pause(50)
    basic.clear_screen()

def on_button_pressed_ab():
    radio.send_number(ESPACIO)
    espacio()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_number(RAYA)
    raya()
input.on_button_pressed(Button.B, on_button_pressed_b)

def espacio():
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(50)
    basic.clear_screen()
ESPACIO = 0
PUNTO = 0
RAYA = 0
RAYA = 1
PUNTO = 2
ESPACIO = 3
Finished = 4
radio.set_group(67)