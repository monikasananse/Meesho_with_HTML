document.querySelector("#form").addEventListener("submit",submitFun);

let arr=[];


function submitFun(event){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let phone=document.querySelector("#number").value ;

    let obj={
        name:name,
        phone:phone
    }
    arr.push(obj);
    //console.log(arr);
    localStorage.setItem("meeshoData",JSON.stringify(arr));
    window.location.href="Login.html";

}