function Element(x, y, width, height, gameScreen, controller) {
    this.x = x | null;
    this.y = y | null;
    this.width = width | null;
    this.height = height | null;

    this.gameScreen = gameScreen;
    this.context = gameScreen.context;
    this.direction = 1;

    this.controller = controller;    
}

Element.prototype = {
    update: function(){        
        
        if(this.controller.keysPressed.up){                        
            this.y -= 10;

            if(this.y - 50 < 0){
                this.y = 50;
            }
        }
        
        if(this.controller.keysPressed.down){
            this.y += 10;

            if(this.y + 50 > this.gameScreen.screenHeight){
                this.y = this.gameScreen.screenHeight - 50;
            }
        }

        if(this.controller.keysPressed.right){                        
            this.x += 10;

            if(this.x + 50 > this.gameScreen.screenWidth){
                this.x = this.gameScreen.screenWidth - 50;
            }
        }
        
        if(this.controller.keysPressed.left){
            this.x -= 10;

            if(this.x - 50 < 0){
                this.x = 50;
            }
        }        
    },

    render: function(){        
        this.context.beginPath();
        this.context.arc(this.x, this.y, 50, 0, 2 * Math.PI);        
        this.context.stroke();                
    }
}