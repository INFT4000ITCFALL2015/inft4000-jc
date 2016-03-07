//$( "#main" ).accordion();

$(document).ready(function(){
    $("#btn1").prop('disabled', false);
    $("#btn2").prop('disabled', false);
    $("#btn3").prop('disabled', false);
    $("#submit").prop('disabled', false);
    $("span").hide('true');
});

$("#reset").click(function(){
    location.reload();
    $("input:checked").removeAttr("checked");
});

$("#btn2").click(function(){
    //load world leaders quiz
    loadQuiz('cap.json')
});

$("#btn1").click(function(){
    loadQuiz('wlq.json')
});

$("#btn3").click(function(){
    loadQuiz('ac.json')
});
    //load world leaders quiz

function loadQuiz(source){
    $.getJSON(source, function(json){
        shuffle(json);
        //Question 1
        $("#q1").text(json[0].question);
        $("#a1").append(json[0].a);
        $("#b1").append(json[0].b);
        $("#c1").append(json[0].c);
        $("#d1").append(json[0].d);
        $("#answer1").append(json[0].answer);

        //Question 2
        $("#q2").text(json[1].question);
        $("#a2").append(json[1].a);
        $("#b2").append(json[1].b);
        $("#c2").append(json[1].c);
        $("#d2").append(json[1].d);
        $("#answer2").append(json[1].answer);

        //Question 3
        $("#q3").text(json[2].question);
        $("#a3").append(json[2].a);
        $("#b3").append(json[2].b);
        $("#c3").append(json[2].c);
        $("#d3").append(json[2].d);
        $("#answer3").append(json[2].answer);

        //Question 4
        $("#q4").text(json[3].question);
        $("#a4").append(json[3].a);
        $("#b4").append(json[3].b);
        $("#c4").append(json[3].c);
        $("#d4").append(json[3].d);
        $("#answer4").append(json[3].answer);

        //Question 5
        $("#q5").text(json[4].question);
        $("#a5").append(json[4].a);
        $("#b5").append(json[4].b);
        $("#c5").append(json[4].c);
        $("#d5").append(json[4].d);
        $("#answer5").append(json[4].answer);

        //Handle Buttons
        $("#btn1").prop('disabled', true);
        $("#btn2").prop('disabled', true);
        $("#btn3").prop('disabled', true);
    });
}

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

$("#submit").click(function(){
    var rightAns = 0;
    var wrongAns = 0;

    var ans1 = $('input[name=answer1]:checked', '#radioGroup1').val();
    var corAns1 = $('#answer1').text();
    if(ans1 == corAns1){
        rightAns += 1;
        $("#radioGroup1").css("background-color", "green");
    }else{
        $("#radioGroup1").css("background-color", "red");
        wrongAns += 1;
        $('<input>', {
            type: 'button',
            id: 'answerBtn',
            value: 'Answer',
            click: function() {
                if($("#answer1").is(":visible") == true){
                    $("#answer1").hide();
                }else {
                    $("#answer1").show();
                }
            }
        }).appendTo('#radioGroup1');
    }

    var ans2 = $('input[name=answer2]:checked', '#radioGroup2').val();
    var corAns2 = $('#answer2').text();
    if(ans2 == corAns2){
        rightAns += 1;
        $("#radioGroup2").css("background-color", "green");
    }else{
        $("#radioGroup2").css("background-color", "red");
        wrongAns += 1;
        $('<input>', {
            type: 'button',
            id: 'answerBtn',
            value: 'Answer',
            click: function() {
                if($("#answer2").is(":visible") == true){
                    $("#answer2").hide();
                }else {
                    $("#answer2").show();
                }
            }
        }).appendTo('#radioGroup2');
    }

    var ans3 = $('input[name=answer3]:checked', '#radioGroup3').val();
    var corAns3 = $('#answer3').text();
    if(ans3 == corAns3){
        rightAns += 1;
        $("#radioGroup3").css("background-color", "green");
    }else{
        $("#radioGroup3").css("background-color", "red");
        wrongAns += 1;
        $('<input>', {
            type: 'button',
            id: 'answerBtn',
            value: 'Answer',
            click: function() {
                if($("#answer3").is(":visible") == true){
                    $("#answer3").hide();
                }else {
                    $("#answer3").show();
                }
            }
        }).appendTo('#radioGroup3');
    }

    var ans4 = $('input[name=answer4]:checked', '#radioGroup4').val();
    var corAns4 = $('#answer4').text();
    if(ans4 == corAns4){
        rightAns += 1;
        $("#radioGroup4").css("background-color", "green");
    }else{
        $("#radioGroup4").css("background-color", "red");
        wrongAns += 1;
        $('<input>', {
            type: 'button',
            id: 'answerBtn',
            value: 'Answer',
            click: function() {
                if($("#answer4").is(":visible") == true){
                    $("#answer4").hide();
                }else {
                    $("#answer4").show();
                }
            }
        }).appendTo('#radioGroup4');
    }

    var ans5 = $('input[name=answer5]:checked', '#radioGroup5').val();
    var corAns5 = $('#answer5').text();
    if(ans5 == corAns5){
        rightAns += 1;
        $("#radioGroup5").css("background-color", "green");
    }else{
        $("#radioGroup5").css("background-color", "red");
        wrongAns += 1;
        $('<input>', {
            type: 'button',
            id: 'answerBtn',
            value: 'Answer',
            click: function() {
                if($("#answer5").is(":visible") == true){
                    $("#answer5").hide();
                }else {
                    $("#answer5").show();
                }
            }
        }).appendTo('#radioGroup5');
    }

    alert("Correct: " + rightAns + "\n" + "Wrong: " + wrongAns)
    $("#submit").prop('disabled', true);
});
