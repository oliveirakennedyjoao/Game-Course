window.onload = function () {
    var gameScreen = new GameScreen();    
    gameScreen.start();
    
    var engine = new Engine(gameScreen);        

    function gameStart(){
        engine.update();
        engine.render();

        window.requestAnimationFrame(gameStart);
    }

    gameStart();
}