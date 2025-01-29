
let fetchData = async () => {
  let url = "http://localhost:3000/doctor";
  let res = await fetch(url, { method: "GET" });
  let data = await res.json();

  console.log(data);
  let show = document.querySelector("#display");
  show.innerHTML = "";

  data.forEach((e) => {
      show.innerHTML += `
          <tr data-id="${e.id}">
              <td>${e.name}</td>
              <td>${e.age}</td>
              <td>${e.number}</td>
              <td>${e.problem}</td>
              <td>${e.date}</td>
              <td>${e.price}</td>
              <td onclick="deelete('${e.id}')">Delete</td>
              <td onclick="updatee('${e.id}')">Update</td>
          </tr>
      `
  });
};


let filterout = () => {
  let searchQuery = document.querySelector("#search").value.toLowerCase();
  let tableRows = document.querySelectorAll("#display tr");

  tableRows.forEach(row => {
      let name = row.cells[0].textContent.toLowerCase();
      if (name.includes(searchQuery)) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
};

window.onload = () => {
  fetchData();
};




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


let updatee=async(id)=>{
  let url=`http://localhost:3000/doctor/${id}`
  let res=await fetch(url)
  let data=await res.json()
  console.log(data);
  
   let Formdata=`
   
   <form >
   <h3>Update Here....</h3>
   <br>
   <label for="upname" >Enter Name:</label>
        <input type="text" id="upname" value="${data.name}" placeholder="Enter your name"> <br>

        <label for="upage">Enter Age:</label>
        <input type="text" id="upage" value="${data.age}" placeholder="Enter your age"> <br>

        <label for="upnumber">Enter Number:</label>
        <input type="text" id="upnumber" value="${data.number}" placeholder="Enter mobile number"> <br>

        <label for="updisease">Disease:</label>
        <select id="updisease">
        <option value="cold" ${data.problem === 'cold' ? 'selected' : ''}>cold</option>
        <option value="cough" ${data.problem === 'cough' ? 'selected' : ''}>cough</option>
        <option value="heart" ${data.problem === 'heart' ? 'selected' : ''}>heart</option>
        <option value="cancer" ${data.problem === 'cancer' ? 'selected' : ''}>cancer</option>
        <option value="pain" ${data.problem === 'pain' ? 'selected' : ''}>pain</option>
      </select><br>

       <label for="update">Enter Date:</label>
        <input type="date" id="update" value="${data.date}"><br> 

        <label for="upprice">Enter Price:</label>
        <input type="text" id="upprice" value="${data.price}" placeholder="Enter price"><br> <br> 


   <input type="submit" value="Update" onclick="return finalUpdate('${data.id}')">
   </form>
` 
    document.querySelector("#updateform").innerHTML=Formdata
  }

    let finalUpdate=(id)=>{
    let inpname=document.querySelector("#upname").value;
    let inpage=document.querySelector("#upage").value;
    let inpnumber=document.querySelector("#upnumber").value;
    let inpdisease=document.querySelector("#updisease").value;
    let inpdate=document.querySelector("#update").value;
    let inpprice=document.querySelector("#upprice").value;

    let url=`http://localhost:3000/doctor/${id}`

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
          price: inpprice
    
      })
    
    });
    return false;
  }










