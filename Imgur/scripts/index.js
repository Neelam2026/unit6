import nav from "../components/navbar.js"
let nav_div=document.getElementById("nav")
nav_div.innerHTML=nav()

//pagination
var page=1
let prev=document.getElementById("prev")
let next=document.getElementById("next")
prev.addEventListener("click",function(){
    if(page!=1){
        page=page-1
        main2()
    }
    else{
        page=1
    }
  
})
next.addEventListener("click",function(){
   if(page!=5){
   page=page+1
   main2()        
   }
   else{
       page=5
   }
     
})

//
import { append_data } from "./appendData.js"
const  main=async()=>{
    try{
         let name=document.getElementById("input").value;        
         let data=await fetch(`https://api.unsplash.com/search/photos?client_id=a-OUEgXO-NmjtpVEgtPPc8a79BE2vjfjCWLCNaCaN54&query=${name}&per_page=20`)
         let d= await data.json()
         console.log(d)
        if(data===undefined){
            return false;
        }
          let parent=document.getElementById("container");
          parent.innerHTML=""
          append_data(d.results,parent)
          if(name==="")
          main2()
    }
    catch(e){
        console.log(e)
    }

}


const main2=async()=>{
    let url=`https://api.unsplash.com/photos/?client_id=a-OUEgXO-NmjtpVEgtPPc8a79BE2vjfjCWLCNaCaN54&per_page=20&page=${page}`
    let data2=await fetch(url)
    let d2=await data2.json()
    let parent=document.getElementById("container");
     parent.innerHTML=""
     append_data(d2,parent)
}
main2()


let search=document.getElementById("input")
search.oninput=debounce;
let timerid;
function debounce() {
    if(timerid){
        clearInterval(timerid)
    }
    timerid=setTimeout(function(){
        main()
      
    },1000)

}


let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    main()
})




