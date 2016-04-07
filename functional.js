
var playerDeck = [];

var cpDeck = [];

var warBoard = [];

function shuffle() {
    for(var i = 1;i < 53; i++){
        var rand = Math.ceil(Math.random()*indexOfCards.length-1);
        if (i % 2 === 0){
            playerDeck.push(indexOfCards[rand]);
        } else {
            cpDeck.push(indexOfCards[rand]);
        }
        indexOfCards.splice(rand,1);
    }  
}
shuffle()

function flip(){
    console.log('flippin')
    if(playerDeck.length <= 0){
        window.location = 'http://cdn.gifbay.com/2013/01/mfw_when_people_forget_my_birthday-29286.gif';
    } else if (cpDeck.length <= 0){
        window.location = 'https://i.kinja-img.com/gawker-media/image/upload/s--dM0nT5E4--/mn3sov5id06ppjkfb1b2.gif';
    } else if(playerDeck[0].value === cpDeck[0].value){
        war();
    } else if(playerDeck[0].value > cpDeck[0].value){
            console.log(
                "playerCard: " + playerDeck[0].value,
                "cpCard: " + cpDeck[0].value,
                "playerDeck: " + playerDeck.length,
                "cpDeck: " + cpDeck.length,
                "warBoard: " + warBoard.length);

            addCard();
            warBoard.push(playerDeck[0],cpDeck[0]);
            cpDeck.splice(0,1);
            playerDeck.splice(0,1);
            playerDeck = playerDeck.concat(warBoard);
            

            $('#cpuTitle').empty();
            $('#cpuTitle').append('CPU Cards: ' + cpDeck.length +" (-"+warBoard.length/2 + ")");
            $('#playerTitle').empty();
            $('#playerTitle').append('Player Cards: ' + playerDeck.length +" (+" + warBoard.length/2 + ")");
            
            warBoard = [];            

        } else { 
            console.log(
                "playerCard: " + playerDeck[0].value,
                "cpCard: " + cpDeck[0].value,
                "playerDeck: " + playerDeck.length,
                "cpDeck: " + cpDeck.length,
                "warBoard: " + warBoard.length)

            addCard();
            warBoard.push(cpDeck[0],playerDeck[0]);
            cpDeck.splice(0,1);
            playerDeck.splice(0,1);
            cpDeck = cpDeck.concat(warBoard);
            
            $('#cpuTitle').empty();
            $('#cpuTitle').append('CPU Cards: ' + cpDeck.length +" (+"+warBoard.length/2 + ")");
            $('#playerTitle').empty();
            $('#playerTitle').append('Player Cards: ' + playerDeck.length + " (-"+warBoard.length/2 + ")");
            
            warBoard = [];
        }
}


var war = function() {
    console.log(playerDeck[0].value,cpDeck[0].value, 'war')
    if(playerDeck.length <= 4){
        window.location = 'http://cdn.gifbay.com/2013/01/mfw_when_people_forget_my_birthday-29286.gif';
    } else if (cpDeck.length <= 4){
        window.location = 'https://media.giphy.com/media/exTeXkpa1h6CI/giphy.gif';
    }
    add4();

    warBoard.push(playerDeck[0],playerDeck[1],playerDeck[2],playerDeck[3]);
    warBoard.push(cpDeck[0],cpDeck[1],cpDeck[2],cpDeck[3]);
    playerDeck.splice(0,4);
    cpDeck.splice(0,4);

    $('#cpuTitle').empty();
    $('#cpuTitle').append('CPU Cards: ' + cpDeck.length +" (-"+warBoard.length/2 + ")");
    $('#playerTitle').empty();
    $('#playerTitle').append('Player Cards: ' + playerDeck.length + " (-"+warBoard.length/2 + ")");

}
