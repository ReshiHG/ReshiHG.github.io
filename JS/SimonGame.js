var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

//  Evento al presionar el teclado

$(document).on("keydown",function(event){
    if (gameStarted == false){
        gameStarted = true;
        $("#level-title").text("Level "+level);
        nextSequence();
    }
});

//  EVENTO AL PRESIONAR CUALQUIER BOTÓN

$(".btn").on("click",function(){
    var userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    animatePress(userChoosenColor);
    playSound(userChoosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

//          FUNCIONES

function playSound(name){
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
};

function animatePress(currentColor){
     $("#"+currentColor).addClass("pressed");
     setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
     },100);

 };

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);                 //Genera número aleatorio
    var randomChosenColor = buttonColors[randomNumber];             //Selecciona el color correspondiente al número aleatorio
    gamePattern.push(randomChosenColor);                            //Añade el último color al arreglo
    animatePress(randomChosenColor);                                //Animación del botón
    playSound(randomChosenColor);
};

function checkAnswer(currentLevel){
     if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
         console.log("correct");
         if(gamePattern.length == userClickedPattern.length){
             setTimeout(function(){
                 nextSequence();
             }, 1000);
         }
     } else {
         console.log("wrong");
         gameOver();
     }
 };

function gameOver (){
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
       $("body").removeClass("game-over");
   },200);

    $("#level-title").text("Game Over Press any key to restart");
    gameStarted = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
};
