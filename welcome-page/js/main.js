let Name = prompt("Lütfen isminizi giriniz");
let userName = document.querySelector("#myName");
userName.innerHTML = `${Name}`



function time(){
    let dateData = new Date()
    let hours = dateData.getHours()
    let minutes=dateData.getMinutes()
    let seconds=dateData.getSeconds()
    
    let days = [ '' ,'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
    let dayName = days[dateData.getDay()]
    
    let info =document.querySelector("#myClock")
    info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`
    
    }
    setInterval(time,1000);//Saatimizin anlık olarak güncellenmessini sağlıyor.
    

