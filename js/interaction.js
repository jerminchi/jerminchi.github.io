/****Variables Here*****/


//count of the images        
var count = 0;

 var picFrame = document.getElementById("imgs");

var projectName = document.querySelector(".project-name");


var projectDes = document.querySelector(".project-des");


var nameArr = ["WikiViewer", "PayUp", "Luminate"];

var linkArr = ["https://github.com/Ch1bi/WikiViewer", "https://play.google.com/store/apps/details?id=com.ch1bi.payup", "https://bitbucket.org/jerminchi/luminate/src"];

//array of images for slideshow
var picArr = ["https://upload.wikimedia.org/wikipedia/commons/f/fa/Wikipedia-iconsdaa.png", "img/payup.png", "img/luminate.png"];

var desArr = ["A web app that can view any Wikipedia page - even random ones!", "A native mobile app that keeps track of your debts and debt owed to you", "A native mobile app that informs you of fatalities by law enforcement."];



//variables for image buttons
var prev = document.getElementById("prev-b");
var next = document.getElementById("next-b");

//for project links
var projectLink = document.querySelector(".project-links");
/****End Variables Here*****/



//fade in effect on page load
$(document).ready(function(){
    $("#title").hide(0).delay(500).fadeIn(2000)

projectLink.href =linkArr[count];
picFrame.src=picArr[0];
projectDes.innerHTML = desArr[count];
projectName.innerHTML = nameArr[count];


});

//sets check if count is out of bounds if so sets the infinite loop
function countCheck(){

    if(count < 0){

            count = picArr.length -1;
    }

    else if(count > picArr.length-1){

        count = 0;
    }
}





 if(next.addEventListener("click", function(){

    getNextPics();
     
 
             
            }));

            else if(prev.addEventListener("click", function(){

                getPrevPics();

            }));

            /**Outside Functions **/

            function getNextPics(){

                count++;
                countCheck();
                projectLink.href = linkArr[count];
                picFrame.src = picArr[count];
                picFrame.href
                  projectDes.innerHTML = desArr[count];
                  projectName.innerHTML = nameArr[count];
               
            }
            function getPrevPics(){
              
              count--;
              countCheck();
              projectLink.href = linkArr[count];
              picFrame.src = picArr[count];
              projectDes.innerHTML = desArr[count];
              projectName.innerHTML = nameArr[count];
            }
             /** End Outside Functions **/
