let set=()=>{
    localStorage.setItem("name","sapna")
    localStorage.setItem("age",29)
  
}
let show=document.querySelector("#display")

// show.innerHTML=localStorage.getItem("name")
// show.innerHTML=localStorage.getItem("age")

let localname=localStorage.getItem("name")
let localage=localStorage.getItem("age")

show.innerHTML=`Hello ${localname} your age is ${localage}`


let rem=()=>{
    // localStorage.removeItem("name") // remove item
    localStorage.clear("age") //clear all data
}

let name=document.querySelector("#name").value
let age=document.querySelector("#age").value

