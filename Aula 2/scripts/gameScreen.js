function GameScreen () { }

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
    },

    clearScreen: function () {        
        this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);
    }

}