let key="0700c7cc82a5e828a51de3d58772ba0a"          
  
   
async function getweatherdata(){

     try{
        // document.getElementById("container").innerHTML="" ;
         let city=document.getElementById("city").value;
         let res  = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`);
         let data= await res.json();
         showweather(data)
         forecaste(data)
        console.log("data:",data)

     }
     catch(err){
        console.log("err:",err)
     }
 }
 
 function  showweather(data){
    // document.getElementById("container").innerHTML="" ;
     document.getElementById("info").innerHTML="" ;
     document.getElementById("gmap-canvas").innerHTML="" ;
     document.getElementById("cityname").innerHTML="" ;
     let info=document.getElementById("info") ;
     let iframe=document.getElementById("gmap-canvas");
     
     let ctnm=document.getElementById("cityname");
     ctnm.textContent=`Weather Report: ${data.city.name}`
     let p8=document.createElement("div")
     p8.textContent=data.list[0].dt_txt
     ctnm.append(p8)
     let temp=document.createElement("p") ;
     temp.innerText=`Temp: ${data.list[0].main.temp}°C`;
     let mxt=document.createElement("p") ;
     mxt.innerText=`Max Temp: ${data.list[0].main.temp_max}°C`;
     let mnt=document.createElement("p") ;
     mnt.innerText=`Min Temp: ${data.list[0].main.temp_min}°C`;
      let humidity=document.createElement("p") ;
      humidity.innerText=`Humidity: ${data.list[0].main.humidity}`;
     let press=document.createElement("p") ;
     press.innerText=`Pressure: ${data.list[0].main.pressure} P`;
     let snr=document.createElement("p") ;
     snr.innerText=`Sun Rise: ${data.city.sunrise}`
     let sns=document.createElement("p") ;
     sns.innerText=`Sun Set: ${data.city.sunset}`
     let wind=document.createElement("p") ;
     wind.innerText=`Wind Speed: ${data.list[0].wind.speed}Km/hr`
    info.append(temp,mxt,mnt,humidity,press,snr,sns,wind)
    iframe.src=`https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed` ;


   
 }

 let day=new Date().getDay()

 function forecaste(data){
     document.getElementById("dis2").innerHTML=""
     document.getElementById("forecast").textContent="Forecast of a city for next 7 days"
     data.list.map(function(data,index){
        
     let div1=document.createElement("div")
   
     div1.setAttribute("id","div1")
    
     let p1=document.createElement("div")
     p1.setAttribute("id","p1")
     let hr1=document.createElement("hr")
     let hr2=document.createElement("hr")
     let p2=document.createElement("img")
     p2.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
     let p3=document.createElement("div")
     p3.setAttribute("id","p3")
     p3.textContent=`Max Temp: ${data.main.temp_max}°C`
     let p4=document.createElement("div")
     p4.setAttribute("id","p4")
     p4.innerText=`Min Temp: ${data.main.temp_min}°C`;
     div1.append(p1,hr1,p2,hr2,p3,p4);
     document.getElementById("dis2").append(div1)
     
     days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
         p1.textContent=days[(day++)%7]            
    })

 }
 
   

   