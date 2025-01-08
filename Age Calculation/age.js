let cal = () => {
    let ans = document.querySelector("#age").value; 
    let currentYear = new Date().getFullYear();
    let age = currentYear - ans; 
    document.querySelector("#result").innerHTML = `Your current age is ${age}`;
  }