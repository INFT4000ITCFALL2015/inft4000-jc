function draw4By4() {
    for (var i=0; i<4; i++){
        $('<div>', {
            id: 'div'+i
        }).appendTo('body');

        for (var j = 0; j<4; j++){
            $('<div>', {
                class: 'square',
                click: move,
                id: 'div'+i+j
            }).appendTo('#div'+i);
        }
    }
}

function getRandomArray(num){
    var list = new Array(num);
    var result = new Array();

    for (var i=0; i<num; i++)
        list[i] = i;
    while (list.length > 0) {
        var index = Math.floor(list.length * Math.random());
        result.push(list[index]);
        list = jQuery.grep(list, function(value) {
            return value != list[index];
        });
    }
    return result;
}

function loadPuzzleNumbers(num){
    var list = getRandomArray(num);
    var counter = 0;
    for (var i =0; i<4; i++){
        for (var j =0; j<4; j++){
            if(list[counter] == 0)
                $('#div' + i + j).toggleClass("hide");
            $('#div' + i + j).text(list[counter++]);
        }
    }
}

function move(){
    var $this_button = $(this);
    var $left = $this_button.prev();
    var $up = $this_button.parent().prev().children().eq($this_button.index());
    var $down = $this_button.parent().next().children().eq($this_button.index());
    var $right = $this_button.next();

    if($left.text() != "" && $left.text() == 0){
        $this_button.toggleClass('hide');
        $left.text($this_button.text());
        $left.toggleClass('hide');
        $this_button.text(0);
    }

    else if($right.text() != "" && $right.text() == 0){
        $this_button.toggleClass('hide');
        $right.text($this_button.text());
        $right.toggleClass('hide');
        $this_button.text(0);
    }

    else if($up.text() != "" && $up.text() == 0){
        $this_button.toggleClass('hide');
        $up.text($this_button.text());
        $up.toggleClass('hide');
        $this_button.text(0);
    }

    else if($down.text() != "" && $down.text() == 0) {
        $this_button.toggleClass('hide');
        $down.text($this_button.text());
        $down.toggleClass('hide');
        $this_button.text(0);
    }
}

function checkWinning(){
    var counter = 1;
    var result = true;
    for(var i=0; i<4 && result; i++){
        $('#div' + i).children.each(function(){
            if($(this).text() != counter && counter < 16){
                result = false;
                return;
            }
            counter++;
        });
        return result;
    }
}