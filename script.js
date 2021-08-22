let activetab, score, currentscore, currentdice, dice, hold, finalscore;


    $('.new').click(reset);

    $('.roll').on('click' , function(){
                dice = Math.floor(Math.random() * 6) + 1;    
            $("img").attr("src", "images/dice-" + dice + ".png");   
            
                if (dice !== 1){
                    currentdice = parseInt($('#current' + activetab).text());
                    currentscore = dice + currentdice;
                    $('#current' + activetab).text(currentscore);
                    
                }
                else{
                    nextplayer();
                }
            });

    $('.hold').on('click', function(){
        
        hold = parseInt($('#score'+ activetab).text());
        score = currentscore + hold;
        $('#score' + activetab).text(score);
        nextplayer();
            
    })





//function to know how's next
function nextplayer(){

    currentscore = 0;

    // set ternary operator

    activetab === 1 ? activetab = 2 : activetab = 1;
    if(activetab == 1){
        $("#active").addClass("activeplayer");
        $("#active1").removeClass("activeplayer");
        $(".info-text1").text("Player 1 turn");
        $(".info-text2").empty();
        $("#current2").text("0");
    }
    else{
        $("#active").removeClass("activeplayer");
        $("#active1").addClass("activeplayer");
        $(".info-text2").text("Player 2 turn");
        $(".info-text1").empty();
        $("#current1").text("0");
    }  
   
}

// function to reset the game

function reset(){

    $("#score1").text("0");
    $("#score2").text("0");

    $("#current1").text("0");
    $("#current2").text("0");

    $(".player1").removeClass("activeplayer");
    $(".player2").removeClass("activeplayer");

    $(".info-text1").empty();
    $(".info-text2").empty();    

}

