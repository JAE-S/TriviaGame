/*
========================================
Trivia Game - Questions & Answers 
========================================
*/



/*
========================================
GLOBAL VARIABLES 
========================================
*/
var correct = 0;   // Questions Answered Correctly
var wrong = 0;    // Questions Answered Wrong
var na = 0;      // Questions Not Answered 

var time = 0;   // Countdown clock


$(function () {
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

    $.each(crazyLaws, function () { // Loops through crazy laws objects 
        console.log("Question: " + this.question);
        // for(var i = 0; i < crazyLaws.length; i++)
    //   console.log(this.options.length);
   
    $("#option_2").text(this.question + " " + this.options + " "); 

        // $("#option_1").append(this.options[0] + " "); 
        // $("#option_2").append(this.options[1] + " ");
        // $("#option_3").append(this.options[2] + " ");
        // $("#option_4").append(this.options[3] + " ");
      
   
            // $("#questions-view").append(answers + this.options + );
            // });
        // var q = $('<div class="laws">');
        //     q.text(this.question);
        // $('#questions-view').append(q); 

        
            // var answers = $('<input/>');
            // answers.attr({ type: 'radio', name:'rad'}).addClass("rad");
            // $("#questions-view").append(answers + this.options + );
            // });
        // console.log(law); 
        // console.log(this.question.length);
        // console.log("Right Answer: " + this.rightAnswer);
        console.log("Options: " + this.options.length);
    
      
});
// var radio = $('<input/>');
// radio.attr({ type: 'radio', name:'rad'}).addClass("op");
// $("#answers").append(radio + answers + " ");
// console.log(options + '')
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

/*
========================================
RESET GAME
========================================
*/
 

/*
========================================
function 
========================================
*/




}); 