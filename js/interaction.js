/**** Button click code ****/
var im = document.getElementById("first")
var myName= document.getElementById("my-name")
var myTitle = document.getElementById("my-title")
var myBlurb = document.getElementById("my-blurb")

//arrow on top of page   
var isUp = false //checks if arrow is pointing up
var svgArrow = document.getElementById("Layer_1")

//arrow inside svg image
var upArrow = document.getElementsByClassName("down-arrow")[0]




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
    myBlurb.style.display = "none"
    
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
    
function handleArrow(e){

    console.log(e)

    
        if(!isUp){
        
            console.log("im going down")
        upArrow.style.transformOrigin="center center"
        upArrow.style.transform="rotate(180deg)"
        isUp = !isUp
}



else if(isUp){   

    console.log("im coming up")

    upArrow.style.transformOrigin="center center"
    upArrow.style.transform="rotate(0deg)"
    document.getElementById("mySidenav").style.height = "0px";
    svgArrow.style.marginTop = "0px";
    isUp = !isUp;
}
}

//checks when arrow down transition finishes
svgArrow.addEventListener("click", handleArrow, false)


