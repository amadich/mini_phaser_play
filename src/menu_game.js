class menu_game extends Phaser.Scene {
    constructor() {
        super("menuGame");
    }
    create() {
        let bg = this.add.image(0, 0, "bg_scene").setOrigin(0, 0);
        bg.setScale(.25);
        //
        let border1 = this.add.image(200,200,"Border").setOrigin(0,0).setScale(.3);
        border1.setInteractive();
        this.add.text(310,215,"Start Play", {
            color: '#ffffff',
            fontSize: '40px',
            fontFamily: 'cursive'
        });
        let s_vis = this.add.image(150,250,"selected").setScale(.5);
        s_vis.setVisible(false);
        border1.on("pointerover", () => {
            s_vis.setVisible(true);
            border1.on("pointerdown", e=> {
                this.scene.start("join_spawn");
            })
        })
        border1.on("pointerout", () => {
            s_vis.setVisible(false);
        })
        this.add.image(200,400,"Border").setOrigin(0,0).setScale(.3);
        this.add.text(300,415,"OPtion Game", {
            color: '#ffffff',
            fontSize: '40px',
            fontFamily: 'cursive'
        });
    }
}