let swiper=new Swiper('.swiper',{
    navigation: {
        nextEl: ".next",
        prevEl: ".swiper-button-prev",
      }
})

VANTA.BIRDS({
  el: "#mainbox",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color1: 0x8eff00,
  color2: 0xff72
})

var typed = new Typed('#typing', {
  strings: ["MERN DEVELOPER","Sapna Sahani","Web Developer"],
  typeSpeed: 30,
  loop:true,
  
});