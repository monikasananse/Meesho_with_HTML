document.querySelector("#otp").addEventListener("submit",pogo);

var otp="456789"
function pogo(event){
    event.preventDefault();

    let str="";
    let first=document.querySelector("#first").value ;
    let sec=document.querySelector("#sec").value ;
    let third=document.querySelector("#third").value ;
    let fourth=document.querySelector("#fourth").value ;
    let fifth=document.querySelector("#fifth").value ;
    let sixth=document.querySelector("#sixth") .value ;

    str=str+first+sec+third+fourth+fifth+sixth;

    console.log(str);

    if(str===otp){
        window.location.href="Navbar.html"
    }
    else{
        alert("You entered wrong OTP")
    }


}