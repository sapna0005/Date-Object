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
         <td onclick="deletee('${e.id}')">Delete</td>
      </tr>
    `
})
}

let deletee=(id)=>{
    let url=`http://localhost:3000/doctor/${id}`
    fetch(url,{method:"DELETE"})
}









