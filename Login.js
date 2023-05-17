let arr=JSON.parse(localStorage.getItem("meeshoData"));
console.log(arr);

document.querySelector("#form").addEventListener("submit",submitFun);

function submitFun(event){
    event.preventDefault();

    let number=document.querySelector("#number").value ;

    for(let i=0;i<arr.length;i++){
        if(arr[i].phone===number){
            alert("OTP will sent to your registered mobile number")
            window.location.href="OTP.html"

        }
        else{
            alert("Invalid Number")
        }
    }
       
}