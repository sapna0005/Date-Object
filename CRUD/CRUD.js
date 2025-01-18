// console.log("received");
// setTimeout(()=>{
//     console.log("process");
// },3000)

// console.log("completed");

let fetchData=async()=>{
    let url="http://localhost:3000/doctor"
    let res=await fetch(url,{method:"GET"})//method we are using here is method get
    let data=await res.json()

//    by default behavoiur of fetch is get

console.log(data);
// fetch method is aynchronous to convert it into syncronous we use async and await keyword


let show=document.querySelector("#display")
data.map((e)=>{
    show.innerHTML+=`
      <tr>
         <td>${e.name}</td>
         <td>${e.age}</td>
         <td>${e.number}</td>
         <td>${e.problem}</td>
         <td>${e.date}</td>
         <td>${e.price}</td>
         <td>${e.id}</td>
         <td onclick="deelete('${e.id}')">Delete</td>
      </tr>
    `
})
}

let deelete=(id)=>{
    let url=`http://localhost:3000/doctor/${id}`
    fetch(url,{method:"DELETE"})
}

let insertt=()=>{

    let inpname=document.querySelector("#inpname").value;
    let inpage=document.querySelector("#inpage").value;
    let inpnumber=document.querySelector("#inpnumber").value;
    let inpdisease=document.querySelector("#inpdisease").value;
    let inpdate=document.querySelector("#inpdate").value;
    let inpprice=document.querySelector("#inpprice").value;
    
    
    let url='http://localhost:3000/car'
    
    fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
    
          name:inpname ,
          age:inpage ,
          number:inpnumber ,
          problem:inpdisease ,
          date:inpdate ,
          price: inpprice
    
      })
    
    })
    return false;
    
}









