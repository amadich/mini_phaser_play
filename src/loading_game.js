class loading_game extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 320, 50);
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(250, 280, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
            // loading ...

            this.load.image("bg_scene",'./atlas/bg_scene.jpg');
            this.load.image("Border","./atlas/btn/Border.png");
            this.load.image("selected","./atlas/btn/selected.png");

            // atlas
            this.load.atlas("player",'./atlas/player/player.png','./atlas/player/player.json');
            this.load.atlas("slash",'./atlas/player/demo/slash/slash.png','./atlas/player/demo/slash/slash.json');
            // tiles
            this.load.image("tiles","./atlas/terrain_atlas.png");
            this.load.tilemapTiledJSON("map","./atlas/map.json");

    }
    create() {
        this.scene.start("menuGame");
    }
}