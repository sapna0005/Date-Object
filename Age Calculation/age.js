let cal = () => {
    let ans = document.querySelector("#age").value; 
    let currentYear = new Date().getFullYear();
    let age = currentYear - ans; 
    document.querySelector("#result").innerHTML = `Your current age is ${age}`;
  }


  VANTA.WAVES({
    el: "#ages",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x81b6e5,
    shininess: 63.00,
    waveHeight: 15.50,
    waveSpeed: 1.10,
    zoom: 1.15
  })