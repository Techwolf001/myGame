class BeamGroup extends Phaser.Physics.Arcade.Group{



    constructor(scene){
        super(scene.physics.world, scene)           
        
        this.createMultiple({
            classType: Beam,
            frameQuantity: 100,
            active: false,
            visible: false,
            key : "Beam" 



        })

    }
    fireBeam(x,y){
        var beam = this.getFirstDead();
        if(beam)
            beam.fireBeam(x,y);
    }

}



class Beam extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y){     
        super(scene, 0,0, "beam");


        this.play("beam_anim");

    }
    fireBeam(x, y){
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.setVelocityY(-900);
        this.scene.physics.world.enableBody(this);
            
    }
    preUpdate(time, delta){
        super.preUpdate(time, delta);
        if(this.y<=0){
            this.setActive(false);
            this.setVisible(false);
           // this.scene.physics.world.disableBody(this);
          //  this.scene.projectiles.remove(this);
        }
    }
}