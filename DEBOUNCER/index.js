
  const main=async()=>{
    try{
        document.getElementById("container").innerHTML=""  
    let name=document.getElementById("input").value;
      let data=await fetch(`https://api.unsplash.com/search/photos?client_id=a-OUEgXO-NmjtpVEgtPPc8a79BE2vjfjCWLCNaCaN54&query=${name}&per_page=20`)
      let d= await data.json()
      console.log(d.results)
      append(d.results)
    }
    catch(e){
        console.log(e)}
    }
  
   
    
    
   
    //append
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
    
     
     
    //debounce

    function debounce(main,delay){
      if( timeid){
          clearTimeout(timeid)
      }
      timeid=setTimeout(function(){
          main()
      },delay)
    }
    let timeid;