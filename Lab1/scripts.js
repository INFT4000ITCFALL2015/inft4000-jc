/**
 * Created by inet2005 on 9/22/15.
 */
"use strict";

function changeZ()
{
    if(document.getElementById("front").style.zIndex<=document.getElementById("back").style.zIndex)
    {
        document.getElementById("front").style.zIndex = 1;
        document.getElementById("front").style.opacity = 100;
        document.getElementById("back").style.zIndex = 0;
        document.getElementById("back").style.opacity = 50;
    }
    else
    {
        document.getElementById("back").style.zIndex = 1;
        document.getElementById("front").style.zIndex = 0;
        document.getElementById("back").style.opacity = 100;
        document.getElementById("front").style.opacity = 50;
    }

    if (document.getElementById("back").style.zIndex == 1)
    {
        document.getElementById("back").style.opacity = "1";
        document.getElementById("front").style.opacity = "0.5";
    }
    else
    {
        document.getElementById("front").style.opacity = "1";
        document.getElementById("back").style.opacity = "0.5";
    }
}

var isOpenTopic1 = false;
var isOpenTopic2 = false;
var isOpenTopic3 = false;
var isOpenTopic4 = false;

function t1() {
    if (isOpenTopic1) {
        document.getElementById("h1").style.backgroundColor = "cornflowerblue";
        document.getElementById("p1").style.display = "none";
        isOpenTopic1 = false;
    } else if (!isOpenTopic1) {
        document.getElementById("h1").style.backgroundColor = "grey";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("h2").style.backgroundColor = "cornflowerblue";
        document.getElementById("h3").style.backgroundColor = "cornflowerblue";
        document.getElementById("h4").style.backgroundColor = "cornflowerblue";
        isOpenTopic1 = true;
    }
}

function t2(){
    if(isOpenTopic2){
        document.getElementById("h2").style.backgroundColor = "cornflowerblue";
        document.getElementById("p2").style.display = "none";
        isOpenTopic2 = false;
    }else if(!isOpenTopic2){
        document.getElementById("h2").style.backgroundColor = "grey";
        document.getElementById("p2").style.display = "block";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("h1").style.backgroundColor = "cornflowerblue";
        document.getElementById("h3").style.backgroundColor = "cornflowerblue";
        document.getElementById("h4").style.backgroundColor = "cornflowerblue";
        isOpenTopic2 = true;
    }
}

function t3() {
    if (isOpenTopic3) {
        document.getElementById("h3").style.backgroundColor = "cornflowerblue";
        document.getElementById("p3").style.display = "none";
        isOpenTopic3 = false;
    } else if (!isOpenTopic3) {
        document.getElementById("h3").style.backgroundColor = "grey";
        document.getElementById("p3").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("h2").style.backgroundColor = "cornflowerblue";
        document.getElementById("h1").style.backgroundColor = "cornflowerblue";
        document.getElementById("h4").style.backgroundColor = "cornflowerblue";
        isOpenTopic3 = true;
    }
}

function t4() {
    if (isOpenTopic4) {
        document.getElementById("h4").style.backgroundColor = "cornflowerblue";
        document.getElementById("p4").style.display = "none";
        isOpenTopic4 = false;
    } else if (!isOpenTopic4) {
        document.getElementById("h4").style.backgroundColor = "grey";
        document.getElementById("p4").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("h2").style.backgroundColor = "cornflowerblue";
        document.getElementById("h3").style.backgroundColor = "cornflowerblue";
        document.getElementById("h1").style.backgroundColor = "cornflowerblue";
        isOpenTopic4 = true;
    }
}

var i = 0;
var imageArray = ["mtl1.jpg", "mtl2.jpg", "mtl3.jpg"];
var textArray = ["Knock'd Out!","Price with a massive save!", "Big Hit on Bozak!"];


function slideShow()
{

    document.picture.src = imageArray[i];
    if(i < imageArray.length - 1){ i++;
    } else {
        i = 0;
    }

    document.getElementById("textLine").innerHTML = textArray[i];
    if(i < textArray.length - 1){i++;
    }else{
        i = 0;
    }

    setTimeout("slideShow()",3000);
}

window.onload=slideShow;








