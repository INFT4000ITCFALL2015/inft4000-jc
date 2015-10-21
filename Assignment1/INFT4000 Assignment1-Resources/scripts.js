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
            var numReg = /^[1-9]$/;
            if (numReg.exec(this.textContent) == null) {
                alert("Please Enter a Number Between 1 and 9");
                this.textContent = "";
            }
        })
    }

    var rowA = document.getElementsByClassName("A");
    for (var j = 0; j < empties.length; j++) {
        empties[i].addEventListener('blur', function () {
           for(var x =0; x < rowA.length; x++){

           }
        })
    }
});

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