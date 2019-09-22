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
    var laws = [];


    var crazyLaws = [
            { 
            // Question 1
            question: "...let your donkey sleep in a bathtub?",
            rightAnswer: "Arizona",
            options: ["Oklahoma", "California", "Nebraska", "Arizona"],
           
            }, {
            // Question 2
            question: "...ride your horse over 10mph?",
            rightAnswer: "Indiana",
            options: ["Indiana", "Pennsylvania", "Kentucky", "Illinois"],

            }, {
            // Question 3
            question: "...blow a whistle outside?",
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
// var clock = document.getElementById("clock");
// console.log(clock);
var buttonClick = document.getElementById("buttonClick");
var clock = document.getElementById("clock");
var soundLost = document.getElementById("soundLost");

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
        // buttonClick.play();
    });    

/*
========================================
Submits Answers / Results
========================================
*/
var resultsAnswers = [];

    $("#submit").on('click', function() { 
        submit();
        buttonClick.play();
        clock.pause();
    });    
        function submit() {
        correct = 0;
        wrong = 0; 
        na = 0;  
        $("input[class='record']:checked").each(function(i) {
            console.log('I!!! ', i)
            console.log('THIS VAL ', $(this).val())
            console.log('right answer ', crazyLaws[i].rightAnswer)
            if ($(this).val() === crazyLaws[i].rightAnswer){
                console.log("correct");
                correct++;
                $('#correctAnswers').text(correct + ' ');
            } else if ($(this).val() !== crazyLaws[i].rightAnswer){
                console.log("wrong");
                wrong++;
                resultsAnswers.push($(this).val());
                console.log(resultsAnswers);
                $('#incorrectAnswers').text(wrong + ' ');
            }
        });
  
        if ((wrong + correct) !== crazyLaws.length){
            console.log('lawssssss', crazyLaws.length);
            na = (12 - (wrong + correct));
            $('#unanswered').text(na + '');
            }
        else {
            na = 0;
        }
            console.log(na);
        $(".activeGame").hide();             // Hides activeGame 
        $(".results").show();               // Shows results
        // generateAnswers()               // Generates answers
        stop();                           // Stops timer 
        answers();                       // Toggles between correct q & a's
    }
 

/*
========================================
RESET GAME
========================================
*/
    $('#tryAgain').on('click', function() { 
        event.preventDefault();
        correct = 0;
        wrong = 0; 
        na = 0;  
        $("input[class='record']:checked").each(function() {
            $(this).prop('checked', false);
        });
        $(".activeGame").show();                 // Shows activeGame 
        $(".results").hide();                   // Hides results
        reset();                               // Resets timer 
        answers();                       // Toggles between correct q & a's
        // buttonClick.play();
    });    

/*
========================================
Adds Questions and answers
========================================
*/
    function generateTrivia(){  
        event.preventDefault();

        crazyLaws.forEach(function(crazyLaws){
            var row = $('<div>');
            var a = $('<div>');
            var questions = crazyLaws.question; 
            laws = crazyLaws.stateLaw;
            console.log(laws);
            a.append($('<div class="row1 questions" id="a-"' 
            +i+'></div>').append(questions + " "));
            a.append($('<div class="row1 stateLaw" id="q-"' 
                +i+'></div>').append(laws + " "));
            row.append($('<div class="row1"></div>').append(questions + " "));
            var choices = crazyLaws.options.splice(', '); 
            console.log(choices.length)
            
            for (var i = 0; i < choices.length; i++ ) {
                row.append('<label class="row2"><input class="record"' 
                +i+' type="radio" name="'  + crazyLaws.question.length +'"  value="' + choices[i] + '" /> ' + choices[i] + '</label>');
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
        if (!clockRunning) {
            intervalId = setInterval(decrement, 1000); // setInterval to initiate the count
            clockRunning = true;                       // Sets the countDown to running
        }
    }

    function start() {
        $("#countDown").text("01:00");                // Sets countDown display to "00:00"
        if (!clockRunning) {
            intervalId = setInterval(decrement, 1000); // setInterval to initiate the count
            clockRunning = true;                       // Sets the countDown to running
            // clock.play();
        }
    }
    function stop() {
        clearInterval(intervalId);    // ClearInterval to stop the count
        clockRunning = false;         // Stops the countDown
        $(".activeGame").hide();             // Hides activeGame 
        $(".results").show();               // Shows results
        // clock.pause();
        // soundLost.play(); 
       
    }
    function decrement() {
        time--;                           // Decrements time by 1
  
        var converted = timeConverter(time); // Gets the current time 
        console.log(converted);             // --> passes it through the timeConverter function                                     // --> Saves the result in a variable
        $("#countDown").text(converted);  // Updates the converted countDown display
        if (time === -1) {
            stop();   
            submit();                 // If time = 0 stop the clock
            clock.pause();
            soundLost.play();
            // alert("Time Up!");        //  Alert the user that time is up.
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


/*
========================================
Toggle Answers in Results 
========================================
*/
  
    function answers(){
        $("#answer_1").hide();  
        $("#answer_2").hide(); 
        $('#answer_3').hide();
        $('#answer_4').hide();
        $('#answer_5').hide();
        $('#answer_6').hide();
        $('#answer_7').hide();
        $('#answer_8').hide();
        $('#answer_9').hide();
        $('#answer_10').hide();
        $('#answer_11').hide();
        $('#answer_12').hide();
        $('#questions').hide();

        $("#rightAnswers").on('click', function(){
            $("#questions").toggle();
            buttonClick.play();
        });
    
        $("#question_1").on('click', function(){
            $("#answer_1").toggle();
            buttonClick.play();
        });
        $("#question_2").on('click', function(){
            $('#answer_2').toggle();
            buttonClick.play();
        });
        $("#question_3").on('click', function(){
            $('#answer_3').toggle();
            buttonClick.play();
        });
        $("#question_4").on('click', function(){
            $('#answer_4').toggle();
            buttonClick.play();
        });
        $("#question_5").on('click', function(){
            $('#answer_5').toggle();
            buttonClick.play();
        });
        $("#question_6").on('click', function(){
            $('#answer_6').toggle();
            buttonClick.play();
        });
        $("#question_7").on('click', function(){
            $('#answer_7').toggle();
            buttonClick.play();
        });
        $("#question_8").on('click', function(){
            $('#answer_8').toggle();
            buttonClick.play();
        });
        $("#question_9").on('click', function(){
            $('#answer_9').toggle();
            buttonClick.play();
        });
        $("#question_10").on('click', function(){
            $('#answer_10').toggle();
            buttonClick.play();
        });
        $("#question_11").on('click', function(){
            $('#answer_11').toggle();
            buttonClick.play();
        });
        $("#question_12").on('click', function(){
            $('#answer_12').toggle();
            buttonClick.play();
        });
    }





}); 