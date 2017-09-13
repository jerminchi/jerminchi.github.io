/**** Button click code ****/
var im = document.getElementById("first")
var myName= document.getElementById("my-name")
var myTitle = document.getElementById("my-title")
// var myBlurb = document.getElementById("my-blurb")

//home page arrow vars
var svgArrow = document.getElementById("Layer_1")//svg graphic on page
var upArrow = document.getElementsByClassName("down-arrow")[0] //arrow inside svg image
var isUp = false //checks if arrow is pointing up

//project section vars
var diagArr = document.getElementById("Layer_2")

var projects
var titles
var descriptions
var techs

var isDesc = false //checks if description is showing

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("work-word");
var contact = document.getElementById("contact-word")



// When the user clicks on the button, open the modal
btn.onclick = function() {
    im.style.display = "none"
    myName.style.display = "none"
    myTitle.style.display = "none"
    // myBlurb.style.display = "none"
    modal.style.display = "block";
    loadEvents()
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
        im.style.display = "initial"
        myName.style.display = "initial"
        myTitle.style.display = "initial"
        myBlurb.style.display = "initial"

    }
} 

    /**** End Button click code ****/

    /* Set the width of the side navigation to 250px */
function openNav() {

    document.getElementById("mySidenav").style.height = "150px";
    svgArrow.style.marginTop = "150px";


    
}

/* Set the width of the side navigation to 0 */
function closeNav() {

    document.getElementById("mySidenav").style.height = "0";

} 


//function to handle up and down arrow for home
function handleArrow(){

        if(!isUp){
        
        upArrow.style.transformOrigin="center center"
        upArrow.style.transform="rotate(180deg)"
        isUp = !isUp
}


else if(isUp){   

    upArrow.style.transformOrigin="center center"
    upArrow.style.transform="rotate(0deg)"
    document.getElementById("mySidenav").style.height = "0px";
    svgArrow.style.marginTop = "0px";
    isUp = !isUp;
}
}


function loadEvents(){
    
        console.log("loading")
    
        //get projects
       projects = document.querySelectorAll('.projects')
       titles = document.querySelectorAll(".title")
       descriptions = document.querySelectorAll(".description")
       techs = document.querySelectorAll(".techs")
       

       //add click events to them
       for(var i = 0; i < projects.length; i++){

       projects[i].addEventListener('click', handleSwitch, false) 
       }
    }
    

//checks when arrow down transition finishes
svgArrow.addEventListener("click", handleArrow, false)


/**** Project Section JS *****/

//switch when project is clicked or touched
function handleSwitch(e){

    var idx = Array.from(projects).indexOf(e.currentTarget)
    console.log(e)
    console.log(idx)

    if(!isDesc){

        diagArr.style.display = "initial"
        titles[idx].style.display = "none"
        projects[idx].style.backgroundImage="url('img/local-shopper.png')" //need to check why this shows when desc is false        
        descriptions[idx].style.display = "initial"
        techs[idx].style.visibility = "hidden"
        isDesc = !isDesc
      
    }

    else{

        diagArr.style.display = "none"
        titles[idx].style.display = "initial"
        descriptions[idx].style.display = "none"
        projects[idx].style.backgroundImage='none' // need to check why this shows when desc is true
        techs[idx].style.visibility= "visible"
        isDesc = !isDesc
        
    }

}


