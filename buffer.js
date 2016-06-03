
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
        url: "joke3.txt",
        success: function(result){
            $("#text").html(result);
        },
        error: function(obj,status,textStatus){
            $("#text").html("Error:" + textStatus);
            console.log(arguments);
        }});
    });
});

(function() {
    var button = document.getElementById("button1");
    var text = document.getElementById("text");
    var counter = 0;
    button.onclick = function main() {
        counter = counter + 1;
        text.innerHTML = "Counter: " + counter;
    }
})();


function setupCounter(index) {
    var button = document.getElementById("button" + index);
    var text = document.getElementById("text" + index);
    var counter = 0;
    button.onclick = function main() {
        counter = counter + 1;
        text.innerHTML = "Counter: " + counter;
    }
}

setupCounter(1);
setupCounter(2);
setupCounter(3);

(function() {
    function setupCounter(index) {
        var button = document.getElementById("button" + index);
        var text = document.getElementById("text" + index);
        var counter = 0;
        button.onclick = function main() {
            counter = counter + 1;
            text.innerHTML = "Counter: " + counter;
        }
    }

    setupCounter(1);
    setupCounter(2);
    setupCounter(3);
})();

(function() {
    function makeCounter() {
        var count = 0;
        return function() {
            count = count + 1;
            return count;
        }
    }

    var button = document.getElementById("button1");
    var text = document.getElementById("text");
    var counter = 0;
    button.onclick = function main() {
        counter = counter + 1;
        text.innerHTML = "Counter: " + counter;
    }
})();

(function() {
    function makeCounter() {
        var count = 0;
        return function() {
            count = count + 1;
            return count;
        }
    }

    function setupCounter(index) {
        var button = document.getElementById("button" + index);
        var text = document.getElementById("text" + index);
        var counter = makeCounter();
        button.onclick = function main() {
            text.innerHTML = "Counter: " + counter();
        }
    }

    for( var i : [1,2,3] ) {
        setupCounter(i);
    }
    //    setupCounter(1);
    //    setupCounter(2);
    //    setupCounter(3);
})();


$("button").click(
            function() {
                var joke1 = $.ajax("joke1.txt");
                var joke2 = $.ajax("joke2.txt");
                var joke3 = $.ajax("joke3.txt");
                var allJokes = $.when( joke1, joke2, joke3);
                allJokes.then( function( data1, data2, data3) {
                    $("#text").html( data1[0] + "<p>" + data2[0] + "<p>" + data3[0] );
                    console.log( "All jokes", data1, data2, data3);
                });
                allJokes.fail( function() {
                    $("#text").html( "Error" );
                });
            });
