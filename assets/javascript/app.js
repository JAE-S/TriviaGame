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


// $(function () {
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
        // console.log(choices);
    // var tableBody = $('<tbody></tbody');
    // for (var i = 0; i < crazyLaws.length; i++){
        // var row = $('<tr></tr>');
        // row.append($('<td></td>')
      

  
//    $('#option_1').append(questions + " ");
//    console.log(questions);

//    var choices = crazyLaws.options.splice(', '); 
//    $('#option_1').append(choices + " ");
//    console.log(choices);
// });
    // var tableBody = $<('<tbody></tbody>');
    // for (var i = 0; i < results.length; i++) {
    //     var crazyLaws = results[i];
    //     console.log(results);
    // }


    // $.each(crazyLaws, function () { // Loops through crazy laws objects 
    //     // console.log("Question: " + this.question);
    //     // for(var i = 0; i < crazyLaws.length; i++)
    // //   console.log(this.options.length);
   
    // // $("#option_2").append(this.question + " " + this.options + " "); 
    // var choices = this.options.splice(', ')
    // console.log(choices);
 
    // var markup = "<tr class='Laws'><th>" + this.question + "</th></tr>" + "<tr class='choicesRow'><td><input type='radio' name='radio-choice-1' id='radio-choice-1' value='choice-1'> " + "<label for='radio-choice-1'>" + choices[0] + "</label>" + "<input type='radio' name='record'>" + choices[1] + "<input type='radio' name='record'>" + choices[2] + "<input type='radio' name='record'>" + choices[3] + "</td></tr>";
    // $("table").append(markup);

// });

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




// }); 