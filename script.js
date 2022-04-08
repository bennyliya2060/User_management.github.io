// selectors
const button=document.querySelector(".submit-button");
const cancel=document.querySelector(".cancel-button");
//Event Listener
button.addEventListener("click",validateForm);
cancel.addEventListener("click",cancelForm);
//function
function validateForm() {
    let x = document.forms["myform"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
    }
    else{
        let y = document.forms["myform"]["userid"].value; 
        if (y == "") {
            alert("user id must be filled out");
        }      
        else{
            let p = document.forms["myform"]["phoneno"].value; 
            if (p == "") {
                alert("Phone number must be filled out");
            } 
            else{
                let r = document.forms["myform"]["regid"].value; 
                if (r == "") {
                    alert("Registration id must be filled out");
                }
                else{
                    let d = document.forms["myform"]["distct"].value; 
                    if (d == "") {
                        alert("District must be filled out");
                    }
                    else{
                        let i = document.forms["myform"]["image"].value; 
                        if (i == "") {
                            alert("image must be uploaded");
                        }
                        else{
                            alert("New user added successfully");
                        }
                    }          
                }
            }      
        }                                
    }
}
function cancelForm(){
    alert("insertion cancelled");
}