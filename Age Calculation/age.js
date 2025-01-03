let age=()=>{
    let ans=document.querySelector("#display").value
    let date=new Date().getFullYear();
    let ans1=date-ans;
    document.querySelector("#display-1").innerHTML=`Your current age is ${ans1}`
    
}