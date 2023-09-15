class Sceen2 extends Phaser.Scene {
    constructor() {
        super("PlayGame")
    }


    createBackgrounds(num) {
        let bg = [];
        for (let i = 0; i < num; i++) {
            let width = (config.width / 2)
            let background = this.add.sprite(0, config.height / 2, 'background');
            background.x = width * i
            background.setDisplaySize(config.width, config.height);
            bg.push(background)
        }
        return bg;
    }

    


    create() {
        //  this.backgrounds = this.createBackgrounds(4);

        this.background = this.add.tileSprite(config.width / 2, config.height / 2, config.width, config.height, 'background');


        this.ship1 = this.add.sprite(config.width / 2 - 70, config.height / 2, "ship");
        this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
        this.ship3 = this.add.sprite(config.width / 2 + 70, config.height / 2, "ship3");



        this.ship1.setScale(2, 2)
        this.ship2.setScale(2, 2)
        this.ship3.setScale(2, 2)

        //        this.cameras.resize(config.width, config.height);

        this.ship1.play("ship_flying")
        this.ship2.play("ship_flying2")
        this.ship3.play("ship_flying3")

        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        this.input.on("gameobjectdown", this.destroyShip, this);


        this.add.text(20, 20, "Playing Game", { font: "25px Arial", fill: "yellow" })
        this.powerUps = this.physics.add.group();
        this.projectiles= new BeamGroup(this);

        var maxObjects = 4;
        for (var i=0; i<= maxObjects; i++){
            var powerUp = this.physics.add.sprite(16, 16, "power-up");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0,0, game.config.width, game.config.height);
            if(Math.random()>.5){
                powerUp.play("red")
            }else{
                powerUp.play("grey")
            }
            powerUp.setVelocity(100,100);
            powerUp.setBounce(1);
            powerUp.setCollideWorldBounds(true)
       
        }
        
        this.player = this.physics.add.sprite(config.width / 2 - 8, config.height -64, "player");
        this.player.play("thrust")
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true); 
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    destroyShip(pointer, gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }


    moveShip(ship, speed) {
        ship.y += speed;

        if (ship.y > config.height + (ship.width * 2)) {
            this.resetShipPosition(ship)
        }
    }

    moveBackground(speed) {
        this.background.tilePositionY -= .5
        // for (let i = 0; i < this.backgrounds.length - 1; i++) {
        //     let bg = this.backgrounds[i];
        //     bg.x -= speed;
        //     if (bg.x <= config.width + bg.width / 2) {
        //         bg.x = config.width * this.backgrounds.length;
        //     }
        // }
    }
 
    resetShipPosition(ship) {
        ship.y = -(ship.height * 2);
        var randx = Phaser.Math.Between(0, config.width);
        ship.y = randx
    }

    shootBeam(){
        var beam = this.physics.add.sprite(this.player.x, this.player.y, "beam");
        var beam = new Beam(this);

    }
    update() {
        this.moveBackground(.5)
        this.movePlayerManager()
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
            this.projectiles.fireBeam(this.player.x, this.player.y);
        }



        //  this.moveShip(this.ship1, 1);
        //this.moveShip(this.ship2, 1);
        //this.moveShip(this.ship3, 1);

    }
    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed);
        }else if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(gameSettings.playerSpeed);
        }else if(this.cursorKeys.up.isDown){
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }else if(this.cursorKeys.down.isDown){
            this.player.setVelocityY(gameSettings.playerSpeed);
        }else{
            this.player.setVelocity(0)
        }

    }
}