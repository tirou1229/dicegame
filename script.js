let activetab, scorefinal, currentscore, dice, play;

$(document).ready(function(){
    $('.roll').on('click' , function(){
            dice = Math.floor(Math.random() * 6) + 1;    
            $("img").attr("src", "images/dice-" + dice + ".png");                
    });
});




//function to know how's next
function nextplayer(){

    // set ternary operator

    activetab === 0 ? activetab = 1 : activetab = 0;

    // initiate currentplayer

    currentscore = 0;

    // set current tab to 0

    $("#current1").text("0");
    $("#current2").text("0");

    //add a class on the side of the game

    $(".player1").addClass("activeplayer");
    $(".player2").addClass("activeplayer");
}

// function to reset the game

function reset(){
    activetab = 0;
    scorefinal = [0,0];
    currentscore = 0;

    $("#score1").text("0");
    $("#score2").text("0");

    $("#current1").text("0");
    $("#current2").text("0");

    $(".player1").removeClass("activeplayer");
    $(".player2").removeClass("activeplayer");

}

