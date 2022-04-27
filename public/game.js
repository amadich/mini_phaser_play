let config = {
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: "#3c6fcb",
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        loading_game,
        menu_game,
        spawn
    ]
}
let game = new Phaser.Game(config);
let player;
let slash;
let setplayer;
let cursors;