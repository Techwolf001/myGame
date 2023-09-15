
const assets = (file) => `assets/images/${file}`;

class Scene1 extends Phaser.Scene {
    constructor() {
        super("space shooter splash")
    }
    preload() {
        this.load.image("background", assets("background.png"));
        this.load.spritesheet("ship", assets("sheets/ship.png"), { frameWidth: 16, frameHeight: 16 })
        this.load.spritesheet("ship2", assets("sheets/ship2.png"), { frameWidth: 32, frameHeight: 16 })
        this.load.spritesheet("ship3", assets("sheets/ship3.png"), { frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet("explosion", assets("sheets/explosion.png"), { frameWidth: 16, frameHeight: 16 })
        this.load.spritesheet("power-up", assets("sheets/power-up.png"), { frameWidth: 16, frameHeight: 16 })
        this.load.spritesheet("player", assets("sheets/player.png"), {frameWidth: 16, frameHeight: 16})
        this.load.spritesheet("beam", assets("sheets/beam.png"), {frameWidth: 16, frameHeight: 16})

    }

    animations() {
       


    }
    

    create() {
        this.add.text(20, 20, "Loading...")
        this.scene.start("PlayGame")
        
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start:0,
                end:1
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "grey",
            frames: this.anims.generateFrameNumbers("power-up", {
                start:2,
                end:3
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship_flying",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship_flying2",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship_flying3",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1,
        });
        
    }

}