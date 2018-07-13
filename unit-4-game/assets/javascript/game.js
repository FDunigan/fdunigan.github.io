var targetNumber; 
var wins = 0;
var losses = 0;
var counter = 0;

var resetAndStart = function () {

$(".crystals").empty();

var images = [
    'https://www.rd.com/wp-content/uploads/2017/08/13_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg', 
    'http://koohistone.net/wp-content/uploads/2018/01/51snWRfynML._US500_.jpg', 
    'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719', 
    'https://media.istockphoto.com/photos/crystal-on-white-picture-id174289783?k=6&m=174289783&s=612x612&w=0&h=ayolv8SS2mmy_hP8IJ7FcvS24n_sRrcqwkIhaXDmlq4='];

targetNumber = 19 + Math.floor(Math.random() * 101);

$("#number-to-guess").html(targetNumber);

for (var i = 0; i < 4; i++) {

var random = Math.floor(Math.random() * 12) + 1;

var crystal = $("<div>");
    crystal .attr({
        "class": 'crystal',
        "data-random": random
    });
    crystal.css({
        "background-image": "url('" + images[i] + "')",
        "background-size": "cover",
    });

    $(".crystals").append(crystal);
}

}

resetAndStart();

$(document).on('click', ".crystal", function(){

    var num = parseInt($(this).attr('data-random'));
    counter += num;
    $("#total-score").html(counter);
    console.log(counter);
    
    if (counter > targetNumber) {
        losses++;
        $("#losses").html(losses);
        $("#total-score").html(0);
        counter = 0;
        resetAndStart();
    }

    else if (counter === targetNumber) {
        wins++;
        $("#wins").html(wins);
        $("#total-score").html(0);
        counter = 0;
        resetAndStart();
    }

});