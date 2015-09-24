/**
 * Created by inet2005 on 9/24/15.
 */
"use strict";

function highLightNewsItems(headerElement)
{
    //headerElement.style.backgroundColor = "yellow";
    var articleNode = headerElement.parentNode;
    articleNode.style.backgroundColor = "yellow";
}

function setBackNewsItems(headerElement)
{
    var articleNode = headerElement.parentNode;
    articleNode.style.backgroundColor = "transparent";
}

//function showAlert()
//{
//    alert("Limited time only!!!");
//}

function addNewTextToFooter()
{
    var footerElement = document.getElementById("targetFooter");

    var newParaNode = document.createElement("p");
    var newTextNode = document.createTextNode("New text");
    newParaNode.appendChild(newTextNode);
    footerElement.appendChild(newParaNode);
}

document.getElementById("clickHeader").addEventListener("dblclick",addNewTextToFooter);
document.getElementById("secondClickHeader").addEventListener("click",function(){
    alert("Limited time only!!!");
});

document.getElementById("secondClickHeader").addEventListener("mouseover",function(){
    highLightNewsItems(this);
});

document.getElementById("secondClickHeader").addEventListener("mouseout",function(){
    setBackNewsItems(this);
});