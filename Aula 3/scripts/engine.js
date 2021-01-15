function Engine(gameScreen) {    
    
    this.gameScreen = gameScreen;

    this.controller = new Controller(87, 83, 68, 65);        

    this.element = new Element(gameScreen.screenWidth / 2, gameScreen.screenHeight / 2, 
                                200, 200, this.gameScreen, this.controller);

    window.addEventListener('keydown', event => { this.controller.keyDownHandler(event) });
    window.addEventListener('keyup', event => { this.controller.keyUpHandler(event) });        
}

Engine.prototype = {

    update: function() {
        this.element.update();
    },

    render: function(){        
        this.gameScreen.clearScreen();
        this.element.render();
    }
}