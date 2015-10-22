/**
 * Created by inet2005 on 10/20/15.
 */

"use strict";

window.addEventListener("load", function() {

    document.getElementById("reset").addEventListener("click", clear);
    document.getElementById("fillTable").addEventListener("click", fill);


    var empties = document.getElementsByClassName("empty");
    for (var i = 0; i < empties.length; i++) {
        empties[i].addEventListener('keyup', function () {
            if(digitVal(this.textContent) != false){
                document.getElementById(this.id).style.color ='green';
                checkRow(this.id, this.textContent);
                checkCol(this.id, this.textContent);
            }else{
                alert("Please enter a number between 1 and 9");
                this.textContent = "";
            }
        })
    }
});

function digitVal(element){
    var numReg = /^[1-9]$/;
    if(numReg.exec(element) == null) {
       return false;
    }
}

function checkRow(element1, element2){
    var rowArray = [];
    var num = document.getElementById(element1);
    var checkRows = num.className.split(' ')[1];
    var rows = document.getElementsByClassName(checkRows);
    for(var i = 0; i < rows.length; i++){
        rowArray.push(rows[i].textContent);
    }

    var counter= 0;
    for(i = 0; i < rowArray.length; i++){
        if(rowArray[i] == element2){
            counter += 1 ;
        }
    }

    if(counter == 2){
        alert("this number is already in this row");
        document.getElementById(element1).style.color = 'red';
    }


}

function checkCol(element1, element2){
    var colArray = [];
    var num = document.getElementById(element1);
    var checkCol = num.className.split(' ')[2];
    var cols = document.getElementsByClassName(checkCol);
    for(var i = 0; i < cols.length; i++){
        colArray.push(cols[i].textContent);
    }

    var counter= 0;
    for(i = 0; i < colArray.length; i++){
        if(colArray[i] == element2){
            counter += 1 ;
        }
    }

    if(counter == 2){
        alert("this number is already in this column");
        document.getElementById(element1).style.color = 'red';
    }


}

function clear(){
    location.reload();
}

function fill(){

    // fill A Row
    document.getElementById("A1").innerHTML = "1";
    document.getElementById("A2").innerHTML = "2";
    document.getElementById("A5").innerHTML = "6";
    document.getElementById("A7").innerHTML = "8";
    document.getElementById("A9").innerHTML = "9";

    // fill B Row
    document.getElementById("B1").innerHTML = "8";
    document.getElementById("B2").innerHTML = "9";
    document.getElementById("B3").innerHTML = "6";
    document.getElementById("B4").innerHTML = "2";
    document.getElementById("B5").innerHTML = "4";
    document.getElementById("B6").innerHTML = "7";
    document.getElementById("B9").innerHTML = "5";

    //fill C Row
    document.getElementById("C3").innerHTML = "7";
    document.getElementById("C4").innerHTML = "1";
    document.getElementById("C5").innerHTML = "8";
    document.getElementById("C6").innerHTML = "9";
    document.getElementById("C8").innerHTML = "4";
    document.getElementById("C9").innerHTML = "6";

    //fill D Row
    document.getElementById("D1").innerHTML = "5";
    document.getElementById("D2").innerHTML = "1";
    document.getElementById("D3").innerHTML = "8";
    document.getElementById("D4").innerHTML = "4";
    document.getElementById("D6").innerHTML = "6";

    //fill E Row
    document.getElementById("E2").innerHTML = "3";
    document.getElementById("E4").innerHTML = "7";
    document.getElementById("E5").innerHTML = "1";
    document.getElementById("E6").innerHTML = "5";
    document.getElementById("E8").innerHTML = "2";

    //fill F Row
    document.getElementById("F4").innerHTML = "3";
    document.getElementById("F6").innerHTML = "8";
    document.getElementById("F7").innerHTML = "5";
    document.getElementById("F8").innerHTML = "6";
    document.getElementById("F9").innerHTML = "1";

    //fill G Row
    document.getElementById("G1").innerHTML = "7";
    document.getElementById("G2").innerHTML = "8";
    document.getElementById("G4").innerHTML = "9";
    document.getElementById("G5").innerHTML = "3";
    document.getElementById("G6").innerHTML = "4";
    document.getElementById("G7").innerHTML = "6";

    //fill H Row
    document.getElementById("H1").innerHTML = "9";
    document.getElementById("H4").innerHTML = "6";
    document.getElementById("H5").innerHTML = "7";
    document.getElementById("H6").innerHTML = "2";
    document.getElementById("H7").innerHTML = "1";
    document.getElementById("H8").innerHTML = "8";
    document.getElementById("H9").innerHTML = "3";

    //fill I Row
    document.getElementById("I1").innerHTML = "2";
    document.getElementById("I3").innerHTML = "3";
    document.getElementById("I5").innerHTML = "5";
    document.getElementById("I8").innerHTML = "9";
    document.getElementById("I9").innerHTML = "4";

}