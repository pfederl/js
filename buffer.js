
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
