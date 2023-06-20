class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    player1 = createSprite(width / 2 - 50, height - 100);
    player1.addAnimation("p1", player1Img);
    player1.scale = 1;

    player2 = createSprite(width / 2 + 100, height - 100);
    player2.addAnimation("p2", player2Img);
    player2.scale = 1;

    players = [player1, player2];
  }

  

  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  

  //SA
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(bgImg, 0, 0, width, height);

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        players[index].position.x = x;
        players[index].position.y = y;

        //add 1 to the index for every loop
        index = index + 1;
      }

      // handling keyboard events
      if (keyIsDown(UP_ARROW)) {
        player.positionY -= 10;
        player.update();
      }
 
   
      drawSprites();
    }
  }

}
