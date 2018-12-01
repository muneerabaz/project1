$(document).ready(function(){
    
    // get the item from the  previous JS page
    var text1 = window.localStorage.getItem('text1');
    var text2 = window.localStorage.getItem('text2');

    $('#Player1').text(text1.toUpperCase());
    $('#Player2').text(text2.toUpperCase());

     var $Player1 = $("#Player1");
     var $Player2 = $("#Player2");
     
     var $square = $('.square');

     //counts the moves so i can decide who's X and who's O based on the player's choice and i started with one 
     //because i want it to count if it is odd or even so ( 1 = X ) then moves+=1; ( 2 = O )
     var moves =1;

      //Players in object so the choice is X or O and the attemptet saves an array of the players choises 
     // so i can Compare between the wining choices and the players choices 
    var player1 = { 
        choice: 'x' ,
        attemptet: []
    }
    var player2 = {
        choice : 'o' ,
        attemptet : []
    }
  
    startGame();

    function startGame(){
        moves=1;
        player1.attemptet = []
        player2.attemptet = []
    $(".square").one('click', function(){
        var cho = $(this).attr('id');
       
        console.log("click")
        if ( moves % 2 == 0){
            
            $(this).append(player1.choice);
            player1.attemptet.push(cho);
           
        }else{
            $(this).append(player2.choice);
            player2.attemptet.push(cho);
           
        } 
        moves+=1;
        winner();
        
       gameLogic(moves);
    });
}
// The winning possibilites
    var winArr = [
    [ 1 , 2 , 3 ],
    [ 4 , 5 , 6 ],
    [ 7 , 8 , 9 ],

    [ 1 , 4 , 7 ],
    [ 2 , 5 , 8 ],
    [ 3 , 6 , 9 ],

    [ 1 , 5 , 9 ],
    [ 3 , 5 , 7 ],
 ]

    function winner(){ 

        for (var i = 0; i < winArr.length; i++) {
            winCountX = 0;
            winCountO = 0;
            for (var j = 0; j < winArr[i].length; j++) { 

                       var xWin = player1.attemptet.indexOf(winArr[i][j].toString());
                       var oWin = player2.attemptet.indexOf(winArr[i][j].toString());
                       
                       if (xWin !== -1){ 
                          winCountX++;

                     } else if (oWin !== -1){   
                        winCountO++;
                    
                    } else if ((player1.attemptet && player2.attemptet) ==!  winArr[i][j] ) {
                        gameLogic(moves);
        } } 
        
        if (winCountX == 3) {
            alert('X WON'); 
            $(".square").off('click');
            replay();
            break;

        } else if (winCountO == 3){
            alert('O WON');
            $(".square").off('click');
            replay();
            break;
        }
    }}  
    function replay(){
        for (let i = 0; i < $square.length; i++) {
             $($square[i]).html('');
            
        }
        startGame();
    }
    function gameLogic(m){
        
        if ((m == 10)){
        //   return m-=1;
            alert('no win'); 
            replay();        
        }
    } 
    
});


