var config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('metal', 'assets/textures/alien-metal.jpg');
}

function create ()
{
    this.sys.game.renderer.blankTexture = this.textures.getFrame('metal').glTexture;

    var graphics = this.add.graphics();

    graphics.lineStyle(128, 0x00ff00, 1);

    graphics.lineBetween(100, 100, 600, 500);
}
