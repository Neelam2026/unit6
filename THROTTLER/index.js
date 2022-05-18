

 const main=async()=>{
    try{
       let data=await fetch(`https://api.unsplash.com/photos/?client_id=a-OUEgXO-NmjtpVEgtPPc8a79BE2vjfjCWLCNaCaN54&per_page=40`)
      let d= await data.json()
      console.log(d)
      append(d)
    }
    catch(e){
        console.log(e)}
    }
  

    const  append=(data)=>{
        document.getElementById("container").innerHTML=""  
         data.map((e)=>{
             let box=document.createElement("div")
             box.id="box"
        
             let img=document.createElement("img")
             img.src=e.urls.small
            box.append(img)
            document.getElementById("container").append(box)
         })
     }
    
   
      const btn=document.querySelector("#throttle");
    
      const throttleFunction=( main, delay)=>{
       main()
      }
      btn.addEventListener("click", throttleFunction(()=>{
       main()
      }, 1500));
 