function validateForm() {
    let x = document.forms["myForm"]["Name"].value;
    let y = document.forms["myForm"]["Email"].value;
    if (x == "") {
        alert("Name must be filled out");
    } 
    
    if (!y.includes("@")) {
        alert("invalid Email! ");
    }
}