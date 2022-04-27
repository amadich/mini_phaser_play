class spawn extends Phaser.Scene {
    constructor() {
        super("join_spawn");
    }

    preload() {

        // animation of Player_move 

       this.anims.create({
        key: "walk",
        frameRate: 10,
        frames: this.anims.generateFrameNames("player", {
            //prefix: "-",
            suffix: ".png",
            start: 143,
            end: 150,
            zeroPad: 3
        }),
        repeat: 0
    });


     // animation of Player_move down 130 - 138

     this.anims.create({
        key: "walk_down",
        frameRate: 10,
        frames: this.anims.generateFrameNames("player", {
            //prefix: "-",
            suffix: ".png",
            start: 130,
            end: 138,
            zeroPad: 3
        }),
        repeat: 0
    });


     // animation of Player_move up 104 - 112

     this.anims.create({
        key: "walk_up",
        frameRate: 10,
        frames: this.anims.generateFrameNames("player", {
            //prefix: "-",
            suffix: ".png",
            start: 104,
            end: 112,
            zeroPad: 3
        }),
        repeat: 0
    });

     // animation of Player_move (slash)

     this.anims.create({
        key: "attack_right",
        frameRate: 10,
        frames: this.anims.generateFrameNames("slash", {
            //prefix: "-",
            suffix: ".png",
            start: 18,
            end: 23,
            zeroPad: 2
        }),
        repeat: 0
    });


    }

    create() {


        // tile map

        const map = this.make.tilemap({ key:'map', tileWidth: 32, tileHeight: 32});
        const tileset = map.addTilesetImage("atlas","tiles");
        const layer = map.createLayer("plan", tileset ,0, 0).setScale(1.10);
        //map.createLayer("back_fix", tileset ,0, 0);
        map.createLayer("objets", tileset ,0, 0).setScale(1.15);
        //map.createLayer("objet_fix", tileset ,0, 0);


        // 
        
        player = this.add.sprite(0,0,"player");
        player.setScale(1.7);
        player.setSize(32,64)
        player.anims.play("walk",true);

        // slash
        slash = this.add.sprite(0,0,"slash");
        slash.setScale(1.15);
        slash.setSize(100,10);
        slash.setInteractive();
        //slash.disableBody(true,true);
        slash.setVisible(false);
        this.input.keyboard.on("keydown-A", ()=> {
            slash.setVisible(true);
            slash.anims.play("attack_right",true);
            slash.on("animationcomplete", ()=> {
                //slash.destroy();
                slash.setVisible(false)
            })
        })



        setplayer = this.add.container(100, 100, [ player, slash]);
        setplayer.setSize(64, 64+32);
        this.physics.world.enable(setplayer);


   

        /*this.input.on("pointermove", (pointer)=> {
           
                player.x = pointer.x
                player.y = pointer.y
           
        })*/

        cursors = this.input.keyboard.createCursorKeys();

    
    }
    update() {
        setplayer.body.setVelocityX(0);
        setplayer.body.setVelocityY(0);
        if (cursors.left.isDown) {
        setplayer.body.setVelocityX(-100);
        player.anims.play('walk', true);
        player.flipX = true;
        slash.flipX = true;
        }
        else if (cursors.right.isDown) {
            setplayer.body.setVelocityX(100);
            player.anims.play('walk', true);
            player.flipX = false;
            slash.flipX = false;
        }
        if (cursors.down.isDown) {
            setplayer.body.setVelocityY(80);
            player.anims.play('walk_down', true);
        }

        if (cursors.up.isDown) {
            setplayer.body.setVelocityY(-80);
            player.anims.play('walk_up', true);
        }
    }
}