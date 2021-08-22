let activetab, score, currentscore, currentdice, dice, hold, finalscore;
$('.new').click(reset); //New game button 

$('.roll').on('click', function () { // roll dice button function
    dice = Math.floor(Math.random() * 6) + 1;
    $("img").attr("src", "images/dice-" + dice + ".png");

    if (dice !== 1) {
        currentdice = parseInt($('#current' + activetab).text());
        currentscore = dice + currentdice;
        $('#current' + activetab).text(currentscore);

    }
    else {
        nextplayer();
    }
});

$('.hold').on('click', function () { // hold button function

    hold = parseInt($('#score' + activetab).text());
    score = currentscore + hold;
    $('#score' + activetab).text(score);
    nextplayer();
    if(hold >= 100 || score >= 100){ // check possible win
        if(activetab == 2){
            alert('Player1 Win'); 
            $(".info-text1").text("Player 1 Win");
            $(".info-text2").empty();           
        }
        else{
            alert('Player2 Win');
            $(".info-text2").text("Player 2 Win");
            $(".info-text1").empty(); 
        }
    }    

})


    

//function to know how's next
function nextplayer() {

    currentscore = 0; // set current score to 0 value so as the last value is not stock in memory

    activetab === 1 ? activetab = 2 : activetab = 1;
    if (activetab == 1) {
        $("#active").addClass("activeplayer");
        $("#active1").removeClass("activeplayer");
        $("#player1").addClass("point");
        $("#player2").removeClass("point");
        $(".info-text1").text("Player 1 turn");
        $(".info-text2").empty();
        $("#current2").text("0");
        $("img").attr("src", "images/dice-1.png");
    }
    else {
        $("#active").removeClass("activeplayer");
        $("#active1").addClass("activeplayer");
        $("#player2").addClass("point");
        $("#player1").removeClass("point");
        $(".info-text2").text("Player 2 turn");
        $(".info-text1").empty();
        $("#current1").text("0");
        $("img").attr("src", "images/dice-1.png");
    }

}

// function to reset the game

function reset() { //New game button function

    $("#score1").text("0");
    $("#score2").text("0");

    $("#current1").text("0");
    $("#current2").text("0");

    $(".info-text1").empty();
    $(".info-text2").empty();

    nextplayer();

}

