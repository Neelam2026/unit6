
 function nav(){
  return  `<div id="navbar">
      <div><img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTieiywMqf5wayCrWCoUijFYlq5Sp9TwtEPA&usqp=CAU"/></div>
     <div id="searchbox" ><input id="input"><button id="btn">🔍</button></div>
     <button id="signin"  onclick="window.location.href='login.html'">Sign in</button>
     <button id="signup" onclick="window.location.href='signup.html'">Sign up</button>
    </div>
    
    <style>
     #navbar{
         
        padding:1%;
         display: flex;
          height: 60px;
         width: 100%;
         background-color:rgb(23,21,68);
     }
     #searchicon{
         width: 7%;
     }
     #logo{
         width: 32%;
         margin: 1%;
     }
     #signin{
  
   margin-left: 32%;
        color: rgb(222, 202, 202);
        height: 30px; 
        margin-top: 1%;
        background-color: rgb(69, 80, 179); 
     }
     #signup{
       
        margin-left: 2%;
        color: rgb(222, 202, 202);
        height: 30px; 
        margin-top: 1%;
        background-color: green; 
    }
    #searchbox{
        border: 1px solid rgb(147, 141, 141); 
        width: 35%;
        height: 40px; 
        margin-top:.5%;
        background-color:rgb(69,68,105);   
    }
    #searchbox>button{
        height:100%;
        width:9%
    }
    #input{
        width: 90%;
       padding: .5%;
        border: 0ch;
        color:white;
        background-color: rgb(69,68,105);
       
    }

   


    </style>`
}

export default nav

