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
         <td onclick="updatee('${e.id}')">Update</td>
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
    
    
    let url='http://localhost:3000/doctor'
    
    fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
    
          name:inpname,
          age:inpage,
          number:inpnumber,
          problem:inpdisease,
          date:inpdate,
          price: 250
    
      })
    
    })
    location.href="index.html"
    return false;
    
}

VANTA.FOG({
  el: "#form-details",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
})

let updatee=async(id)=>{
  let url=`http://localhost:3000/doctor"/${id}`
  let res=await fetch(url)
  let data=await res.json()
  console.log(data);
  
   let Formdata=`
   
   <label for="upname" >Enter Name:</label>
        <input type="text" value="${data.name}" id="upname" placeholder="Enter your name"><br>

        <label for="uppage">Enter Age:</label>
        <input type="text" id="uppage" value="${data.age}" placeholder="Enter your age"><br>

        <label for="upnumber">Enter Number:</label>
        <input type="text" id="upnumber" value="${data.number}" placeholder="Enter mobile number"><br>

        <label for="updisease">Disease:</label>
        <select  id="updisease"> 
            <option value="cold">cold</option>
            <option value="cough">cough</option>
            <option value="heart">heart</option>
            <option value="cancer">cancer</option>
            <option value="pain">pain</option>
        </select>
       <br>

       <label for="update">Enter Date:</label>
        <input type="date" id="update" value="${data.data}"><br>

        <label for="upprice">Enter Price:</label>
        <input type="text" id="upprice" placeholder="Enter price"><br>

           <input type="submit" value="Update" onclick="return finalUpdate('${data.id}')">
`
    document.querySelector("#updateform").innerHTML=Formdata
  }

  let finalUpdate=(id)=>{
    let inpname=document.querySelector("#upname").value;
    let inpage=document.querySelector("#uppage").value;
    let inpnumber=document.querySelector("#upnumber").value;
    let inpdisease=document.querySelector("#updisease").value;
    let inpdate=document.querySelector("#update").value;
    let inpprice=document.querySelector("#upprice").value;

    let url=`http://localhost:3000/doctor"/${id}`

    fetch(url,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
    
          name:inpname,
          age:inpage,
          number:inpnumber,
          problem:inpdisease,
          date:inpdate,
          price: 250
    
      })
    
    })
  }










