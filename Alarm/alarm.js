let alaram=()=>{
 
    let show=document.querySelector("#display")
    let inp=document.querySelector("#inp").value
    let inter=setInterval(()=>{
      let abcd=new Date()
      let alaramtime=`${abcd.getHours().toString().padStart(2,"0")}:${abcd.getMinutes().toString().padStart(2,"0")}`
      if (alaramtime==inp) {
        show.innerHTML="Alarm is ringing"
        document.querySelector("#aud").play()
        
        setTimeout(()=>{
            document.querySelector("#aud").pause()
            clearInterval(inter)
        },7000)
      }
      else{
        show.innerHTML="Alarm Set"
      }
    },1000)
}