function Engine(gameScreen) {    
    
    this.gameScreen = gameScreen;

    this.element = new Element(gameScreen.screenWidth / 2, gameScreen.screenHeight / 2, 200, 200, this.gameScreen);    
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