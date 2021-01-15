function Controller(upKey, downKey, rightKey, leftKey) {
    
    this.keysPressed = {
        up: false,
        down: false,
        right: false,
        left: false
    };

    this.upKey = upKey;
    this.downKey = downKey;
    this.rightKey = rightKey;
    this.leftKey = leftKey;
}

Controller.prototype = {    

    keyDownHandler: function (keyPressed) {        
        switch(keyPressed.keyCode){
            case this.upKey:
                this.keysPressed.up = true;
                break;
            case this.downKey:
                this.keysPressed.down = true;
                break;
            case this.rightKey:
                this.keysPressed.right = true;
                break;
            case this.leftKey:
                this.keysPressed.left = true;
                break;
        }
    },
    
    keyUpHandler: function (keyReleased) {
        switch(keyReleased.keyCode){
            case this.upKey:
                this.keysPressed.up = false;
                break;
            case this.downKey:
                this.keysPressed.down = false;
                break;
            case this.rightKey:
                this.keysPressed.right = false;
                break;
            case this.leftKey:
                this.keysPressed.left = false;
                break;
        }
    }
    
}