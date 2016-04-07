function addCard(){
    $('#cpu').empty();
    $('#cpu').append('<img src=' + cpDeck[0].picture + '>');

    $('#player').empty();
    $('#player').append('<img src=' + playerDeck[0].picture + '>');
}   
function add4(){
        $('#cpu').empty();
        $('#cpu').append('<img src=' + cpDeck[0].picture + '>');
        $('#cpu').append('<img src=' + cpDeck[1].picture + '>');
        $('#cpu').append('<img src=' + cpDeck[2].picture + '>');
        $('#cpu').append('<img src=' + cpDeck[3].picture + '>');

        $('#player').empty();
        $('#player').append('<img src=' + playerDeck[0].picture + '>');
        $('#player').append('<img src=' + playerDeck[1].picture + '>');
        $('#player').append('<img src=' + playerDeck[2].picture + '>');
        $('#player').append('<img src=' + playerDeck[3].picture + '>');

        console.log('adding three')
}