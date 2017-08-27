/**** Button click code ****/
var im = document.getElementById("first")
var myName= document.getElementById("my-name")
var myTitle = document.getElementById("my-title")
var myBlurb = document.getElementById("my-blurb");



// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("work-word");

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
    


