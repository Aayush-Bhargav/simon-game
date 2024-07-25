# MiniProject-SimonGame.github.io
Building the simple Simon Game using HTML, CSS and JAVASCRIPT only.

The Simon Game is a memory and matching game that consists of a series of colored lights and sounds. Players must remember and repeat a sequence of lights and sounds. The sequence starts with one light and sound, and each round adds another light and sound to the sequence. The game tests memory and concentration.

I created the simple version of the Simon Game that has:
1) 4 buttons of different colors that will play different sounds.
2) The seqeunce that the player has to remember and guess keeps increasing after each level.
3) Pressing any key starts the game.

Along with this, I display the current score of the player and the maximum score as well.

1)HTML Structure:
    A div that displays current score and max score.
    A header that displays the level and a game over message when the player' sequence doesn't match the game sequence.
    Four buttons for the game, each representing a color.

2)CSS Styling:
    Basic styles to center the content and style the buttons.
    .pressed class to create a visual effect when buttons are pressed.

3)JavaScript Logic:
    Functions to start the game, generate the sequence, animate buttons, play sounds, handle button clicks, and check user input.
    Event listeners to handle button clicks and start the game.

## Install
*To view the project, click on this link:https://aayush-bhargav.github.io/simon-game/

Or

*git clone https://github.com/Aayush-Bhargav/simon-game.git and right click and open with live server.
