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
    player1.addAnimation("p1", player1);
    player1.scale = 0.07;

    player2 = createSprite(width / 2 + 100, height - 100);
    player2.addAnimation("p2", player2);
    player2.scale = 0.07;

    players = [player1, player2];
  }

  addSprites(paredesGroup, paredesImage, scale) {
    
      var x, y;
      x = random(width/2 + 150, wdith/2 -150);
      y = random(-height*4.5, height - 400 );

     var paredes = createSprite(x,y);
     paredes.addImage("sprite", spriteImage);
     paredesScale = scale;
     paredesGroup.add(sprite);
      
    
  }

  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");Z
  }

  

  //SA
  play() {
    this.handleElements();

    //Player.getPlayersInfo();
    this.start();
   
      drawSprites();
    }
  }


