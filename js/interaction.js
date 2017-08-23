/**** Button click code ****/
var prev = document.getElementById("prev-b")
.addEventListener("click", goBack)

var next = document.getElementById("next-b")
.addEventListener("click", goNext)


function goBack(){

    // if(window.location.pathname == "/"){

    //     window.location="/contact.html"
    // }

    // else if(window.location.pathname == "/contact.html"){

    //     window.location="/about.html"
    // }

    // else if(window.location.pathname == "/about.html"){
        
    // window.location="/work.html"

    //  }

     if(window.location.pathname == "/work.html"){
                
        window.location="/"
     }
            
    
   
}

function goNext(){
    
    if(window.location.pathname == "/"){
        
                window.location="/work.html"
            }
        
            // else if(window.location.pathname == "/work.html"){
        
            //     window.location="/about.html"
            // }
        
            // else if(window.location.pathname == "/about.html"){
                
            // window.location="/contact.html"
        
            //  }
        
            //  else if(window.location.pathname == "/contact.html"){
                        
            //     window.location="/"
            //  }
    }

    
    
    /**** End Button click code ****/
    


