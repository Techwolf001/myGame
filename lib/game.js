var gameSettings = {
    playerSpeed: 200,
}

const config = {
    width: 1260,
    height: 583,
    //width: 256,
    //height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Sceen2],
    pixelArt: true,
    physics: {
        default:"arcade",
        arcade:{
            debug: false
        }
    }
}

var game = new Phaser.Game(config);


