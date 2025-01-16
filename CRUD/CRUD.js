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


}







