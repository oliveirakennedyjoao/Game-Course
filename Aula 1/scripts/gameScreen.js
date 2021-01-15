function GameScreen () {}

GameScreen.prototype = { 
    canvas: null,
    context: null,
    screenWidth: null,
    screenHeight: null,
    
    start: function () {        
        this.canvas = document.getElementById('gameScreen');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = this.screenWidth = window.innerWidth;
        this.canvas.height = this.screenHeight = window.innerHeight;
        //X, Y, Width, Height
        this.context.fillRect(
            (this.screenWidth / 2) - 100,
            (this.screenHeight / 2) - 100,
            200,
            200);
    }

}