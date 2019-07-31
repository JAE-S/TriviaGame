/*
========================================
Trivia Game - Screens
========================================
*/
$(document).ready(function(){

    $(".instructions").show();
    $(".activeGame").hide();
    $(".results").hide();


/*
========================================
GLOBAL VARIABLES 
========================================
*/
var correct = 0;   // Questions Answered Correctly
var wrong = 0;    // Questions Answered Wrong
var na = 0;      // Questions Not Answered 

var time = 0;   // Countdown clock


    var crazyLaws = [
            { 
            // Question 1
            question: "...let your donkey sleep in a bathtub?",
            rightAnswer: "Arizona",
            options: ["Oklahoma", "California", "Nebraska", "Arizona"],
           
            }, {
            // Question 2
            question: "...ride your horse above 10mph?",
            rightAnswer: "Indiana",
            options: ["Indiana", "Pennsylvania", "Kentucky", "Illinois"],

            }, {
            // Question 3
            question: "...blow your ‘Bean’ whistle?",
            rightAnswer: "Connecticut",
            options: ["Connecticut", "Massachusetts", "Rhode Island", "Main"],
            
            }, {
            // Question 4
            question: "...honk your horn near a sandwich shop after 9 p.m?",
            rightAnswer: "Arkansas",
            options: ["Virginia", "Arkansas", "Colorado", "Utah"],

            }, {
            // Question 5
            question: "…send your bestfriend a surprise pizza?",
            rightAnswer: "Louisiana",
            options: ["Maryland", "Montana", "Louisiana", "Ohio"],
            }, {
            // Question 6
            question: "...steal an  alligator?",
            rightAnswer: "Louisiana",
            options: ["Florida", "Alabama", "Louisiana", "South Carolina"],

            }, {
            // Question 7
            question: "...sing in the street after 11pm?",
            rightAnswer: "Kansas",
            options: ["Tennessee", "Kansas", "New Jersey", "Illinois"],

            }, {
            // Question 8
            question: "...share your Netflix password?",
            rightAnswer: "Tennessee",
            options: ["Texas", "Washington", "Georgia", "Tennessee"],

            }, {
            // Question 9
            question: "...lay down on the sidewalk?",
            rightAnswer: "Nevada",
            options: ["Nevada", "New York", "Illinois", "Massachussets"],

            }, {
            // Question 10
            question: "...sell junk to a drunk?",
            rightAnswer: "Wyoming",
            options: ["California", "Oregon", "Wyoming", "Iowa"],

            }, {
            // Question 11
            question: "...predict the future?",
            rightAnswer: "Oregon",
            options: ["Montana", "Oregon","New Mexico", "Alabama"],

            }, {
            // Question 12
            question: "...kill Bigfoot / Sasquatch / Yeti?",
            rightAnswer: "Washington",
            options: ["Washington", "Alaska", "New Hampshire", "North Dakota"],
        }
       
    ];



/*    
========================================
MEDIA
========================================
*/

// $(document).ready(function(){

    
/*
========================================
START GAME - FROM INTRO PAGE 
========================================
*/

    $("#playButton").on('click', function() { 
        $(".activeGame").show();
        $(".instructions").hide();
        generateTrivia()
        
    });    

/*
========================================
RESET GAME
========================================
*/
 

/*
========================================
Count Down Timer
========================================
*/

// id="countDown"


/*
========================================
Adds Questions and answers
========================================
*/
  function generateTrivia(){  
        crazyLaws.forEach(function(crazyLaws){
 
            var row = $('<div>');
            var questions = crazyLaws.question; 
            row.append($('<div class="row1"></div>').append(questions + " "));
            var choices = crazyLaws.options.splice(', '); 
            console.log(choices.length)
            for (var i = 0; i < choices.length; i++ ) {
                row.append('<label class="row2"><input type="radio" name="crazyLaws.options" value="' + choices[i] + '" /> ' + choices[i] + '</label>');
            }
            $("table").append(row);

        }); 
    };


}); 