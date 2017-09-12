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
var projOne = document.getElementById("project-one")
var projOneTitle= document.getElementsByClassName("title")[0]
var projOneDesc= document.getElementsByClassName("description")[0]
var isDesc = false //checks if description is showing
var projOneTechs = document.getElementsByClassName("techs")[0]




// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("work-word");
var contact = document.getElementById("contact-word")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    im.style.display = "none"
    myName.style.display = "none"
    myTitle.style.display = "none"
    // myBlurb.style.display = "none"
    
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {

    modal.style.display = "none";
    im.style.display = "initial"
    myName.style.display = "initial"
    myTitle.style.display = "initial"
    myBlurb.style.display = "initial"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
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

//checks when arrow down transition finishes
svgArrow.addEventListener("click", handleArrow, false)
projOne.addEventListener("click", handleSwitch)


/**** Project Section JS *****/

//switch when project is clicked or touched
function handleSwitch(){

    if(!isDesc){

        diagArr.style.display = "initial"
        projOneTitle.style.display = "none"
        projOne.style.backgroundImage="url('img/local-shopper.png')" //need to check why this shows when desc is false        
        projOneDesc.style.display = "initial"
        projOneTechs.style.display = "none"
        isDesc = !isDesc
      
    }

    else{

        diagArr.style.display = "none"
        projOneDesc.style.display = "none"
        projOne.style.backgroundImage='none' // need to check why this shows when desc is true
        projOneTitle.style.display = "initial"
        projOneTechs.style.display = "flex"
        
        isDesc = !isDesc
        
    }

}


