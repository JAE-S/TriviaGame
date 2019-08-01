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
    var correct = 0;               // Questions Answered Correctly
    var wrong = 0;                // Questions Answered Wrong
    var na = 0;                  // Questions Not Answered 
    var intervalId;            // SetInterval that runs the stopwatch
    var clockRunning = false; // Prevents the clock from being sped up unnecessarily
    var time = 60;            // Sets the clock


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
// var audio = new Audio();

// $(document).ready(function(){

    
/*
========================================
START GAME - FROM INTRO PAGE 
========================================
*/

    $("#playButton").on('click', function() {   // Starts first round of game 
        $(".activeGame").show();          // Shows activeGame 
        $(".instructions").hide();        // Hides instructions
        generateTrivia();                 // Generates questions & answers
        start();                          // starts timer 
        
    });    

/*
========================================
Submits Answers / Results
========================================
*/

    $("#submit").on('click', function() { 
        correct = 0;
        wrong = 0; 
        na = 0;  
        $("input[id='record']:checked").each(function(i) {
            console.log('I!!! ', i)
            console.log('THIS VAL ', $(this).val())
            console.log('right answer ', crazyLaws[i].rightAnswer)
            if ($(this).val() === crazyLaws[i].rightAnswer){
                console.log("correct");
                correct++;
                $('#correctAnswers').text("Correct Answers: " + correct + ' ');
            } else if ($(this).val() !== crazyLaws[i].rightAnswer){
                console.log("wrong");
                wrong++;
                $('#incorrectAnswers').text("Incorrect Answers: " + wrong + ' ');
            }
        });
        if ((wrong + correct) !== 12){
            na = (12 - (wrong + correct));
            $('#unanswered').text("Unanswered: " + na + '');
            }
            console.log(na);
        
        // Sumbits answers 
        $(".activeGame").hide();             // Hides activeGame 
        $(".results").show();               // Shows results
        // generateAnswers()               // Generates answers
        stop();                           // Stops timer 
    
        // #correctAnswers
        // #unanswered
        // #incorrectAnswers
        // #rightAnswers
    });    

/*
========================================
RESET GAME
========================================
*/
    $('#tryAgain').on('click', function() { 
        $(".activeGame").show();                 // Shows activeGame 
        $(".results").hide();                   // Hides results
        reset();                              // Resets timer 
    });    




/*
========================================
Checks Answers
========================================
*/


    
// (function (){ 
//     var form, choicesRow;
//     var form = $('table');
//     var choicesRow = form.elements.crazyLaws.options.length ;
//     var sumbit = $('#submit');
//     var submitted = false; 
     
//     for (c < 0; c < choicesRow.length; i++){
//         addEventListener(choicesRow[i], 'click', radioChanged);
//         console.log(choicesRow);
//     }
    // on inout 

// })

/*
========================================
Adds Questions and answers
========================================
*/
    function generateTrivia(){  
        corret = 0; 

        crazyLaws.forEach(function(crazyLaws){
 
            var row = $('<div>');
            var questions = crazyLaws.question; 
            row.append($('<div class="row1"></div>').append(questions + " "));
            var choices = crazyLaws.options.splice(', '); 
            console.log(choices.length)
            
            for (var i = 0; i < choices.length; i++ ) {
                row.append('<label class="row2"><input id="record"' 
                +i+' type="radio" name="'  + crazyLaws.question.length + '"  value="' + choices[i] + '" /> ' + choices[i] + '</label>');
            }
            
            $("table").append(row);
        }); 
    };




/*
========================================
Count Down Timer Functions 
========================================
*/

    function reset() {
        time = 60;                                // Resets timer
        $("#countDown").text("01:00");            // Sets countDown display to "00:00"
    }

    function start() {
        $("#countDown").text("01:00");                // Sets countDown display to "00:00"
        if (!clockRunning) {
            intervalId = setInterval(decrement, 1000); // setInterval to initiate the count
            clockRunning = true;                       // Sets the countDown to running
        }
    }
    function stop() {
        clearInterval(intervalId);    // ClearInterval to stop the count
        clockRunning = false;         // Stops the countDown
        $(".activeGame").hide();             // Hides activeGame 
        $(".results").show();               // Shows results
    }
    function decrement() {
        time--;                           // Decrements time by 1
  
        var converted = timeConverter(time); // Gets the current time 
        console.log(converted);             // --> passes it through the timeConverter function                                     // --> Saves the result in a variable
        $("#countDown").text(converted);  // Updates the converted countDown display
        if (time === -1) {
            stop();                    // If time = 0 stop the clock
            alert("Time Up!");        //  Alert the user that time is up.
        }
    }
    function timeConverter(t) {          // Display time converter
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
  
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
  
}); 