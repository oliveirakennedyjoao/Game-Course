function Element(x, y, width, height, gameScreen) {
    this.x = x | null;
    this.y = y | null;
    this.width = width | null;
    this.height = height | null;

    this.gameScreen = gameScreen;
    this.context = gameScreen.context;
    this.direction = 1;
}

Element.prototype = {
    update: function(){        
        this.y += 10 * this.direction;
        
        if(this.y + 50 > this.gameScreen.screenHeight){
            this.direction = -1;
        }

        if(this.y - 50 < 0){
            this.direction = 1;
        }
    },

    render: function(){        
        this.context.beginPath();
        this.context.arc(this.x, this.y, 50, 0, 2 * Math.PI);        
        this.context.stroke();                
    }
}