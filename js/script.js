"use strict";
function openSelector(){
    if(this.querySelector(".hidden-content").clientHeight > 0){
        setTimeout(() => {this.querySelector(".hidden-content").style.height="0px";},0);
        setTimeout(() => {this.querySelector(".hidden-content").style.width=this.querySelector(".hidden-content").scrollWidth-100+"px";},300);
        this.querySelector("span").style.transform="rotate(0deg)";
    }
    else{
        setTimeout(() => {this.querySelector(".hidden-content").style.height=this.querySelector(".hidden-content").scrollHeight+"px";
        this.querySelector("span").style.transform="rotate(180deg)";},300);
        this.querySelector(".hidden-content").style.width=this.querySelector(".hidden-content").scrollWidth+100+"px";
    }
}
var select = document.querySelectorAll(".select");
for(var i=0; i<select.length; i++)
    select[i].addEventListener("click", openSelector);

window.addEventListener("load",()=>{
    var img = document.querySelectorAll("img[data-src]");
    for(var i=0; i<img.length; i++){
        img[i].setAttribute("src",img[i].getAttribute("data-src"));
    }
}, false);

var j = 0;
var headings = ["HTML","CSS","Javascript","PHP","Android","Java","Photoshop","Adobe-XD","Corel-Draw"];

setInterval(function(){
    incHeading();
}, 4000);

function incHeading() {
    if(j<headings.length-1){
        j++;
        document.querySelector("#slide-heading").innerHTML="";
        for(var i=0;i<headings[j].length;i++){
            typeWriter(i, headings[j]);
        }
    }
    else{
        j=0;
        document.querySelector("#slide-heading").innerHTML="";
        for(var i=0;i<headings[j].length;i++){
            typeWriter(i, headings[j]);
        }
    }
}

function decHeading() {
    if(j>0){
        j--;
        document.querySelector("#slide-heading").innerHTML="";
        for(var i=0;i<headings[j].length;i++){
            typeWriter(i, headings[j]);
        }
    }
    else{
        j=headings.length-1;
        document.querySelector("#slide-heading").innerHTML="";
        for(var i=0;i<headings[j].length;i++){
            typeWriter(i, headings[j]);
        }
    }
}

function typeWriter(i, str){
    setTimeout(function(){
        document.querySelector("#slide-heading").innerHTML+=str.charAt(i);
    },100 * i);
}