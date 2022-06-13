
let email=document.getElementById('email');
let val

function print(){
    val=email.value;
}

    
  
    
function mail(){
    if (val!=undefined){
        alert(`Thank you for Subscribe ${val}`)
        val="";
        email.value=""
    }
}
