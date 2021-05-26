class Game{
    constructor(){

    }
    getState(){
        var playerCountref = database.ref("gameState")
        playerCountref.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    async start(){
        if (gameState === 0){
            player = new Player()
            var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val()
            }
            form = new Form()
            form.display()

        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100)
        Player.getPlayerInfo();
    
        if(allPlayers !== undefined){
          var display_position = 130;
          for(var plr in allPlayers){
            if (plr === "player" + player.index)
              fill("red")
            else
              fill("black");
    
            display_position+=20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50
          player.update();
        }
      }
}