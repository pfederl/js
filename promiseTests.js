var nSuccess = 0;
var jokes = [];

function showAllJokes() {
    jokes.forEach(function(joke, ind){
        console.log( "" + ind + ": " + joke);
    });
}

function successCB(ind, joke) {
    jokes[ind] = joke;
    nSuccess ++;

    if( nSuccess === 3) {
        showAllJokes();
    }
}

$.ajax("joke1.txt", { success: successCB.bind(this,1) });
$.ajax("joke2.txt", { success: successCB.bind(this,2) });
$.ajax("joke3.txt", { success: successCB.bind(this,3) });


var r1 = $.ajax( "joke1.txt");
var r2 = $.ajax( "joke2.txt");
var r3 = $.ajax( "joke3.txt");

var allRs = $.when
