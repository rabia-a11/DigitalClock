
     setInterval(()=>{  
  
    d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let day_night = "PM"
    if(hours>12){
        day_night = "AM";
        hours = hours-12;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }
    time.textContent = hours + ":" + minutes + ":"+ seconds +":"+day_night;
})