
// //https://api.instantwebtools.net/v1/passenger?page=0&size=10
// import { useEffect, useState } from 'react';
// import './App.css'

// function App() {
// const Page_number=1;
// const [state,setState]=useState([])
// const [page,setPage]=useState(Page_number)

// useEffect(()=>{
//   fetch(`https://api.instantwebtools.net/v1/passenger?${page}=1&size=10`)
//   .then(res=>res.json())
//   .then(json=> setState([...state,...json.data]))
  
// },[page])

// const scrollToEnd=()=>{
//   setPage(page+1)
// }

// window.onscroll=function(){
//   if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
//     scrollToEnd()
//   }
// }

//   return (
//     <div className="App">
//     <div>
//       {state.length>0 && state.map((e,i)=>{
//         return (
//           <div key={i} className={"box"}>
//            <div>  {i+1}. Name: {e.name}</div>
//            <div>Country: {e.airline[0].country}</div>
//            <div> Trips: {e.trips}</div>
//            <div> Id: {e._id}</div>
//           </div>
//         )
//       })}
//     </div>

//      </div>

//   )
// }

// export default App


// //****************************************************************************** */
// import React, { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// const style = {
//   height: 30,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8
// };



// function App() {
// const [state,setState]=useState({
//   items: Array.from({ length: 20 })
// })
  

//  const fetchMoreData = () => {
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     setTimeout(() => {
//      setState({
//         items:state.items.concat(Array.from({ length: 20 }))
//       });
//     }, 1500);
//   };
//   return (
//     <div className="App">
//      <h1>demo: react-infinite-scroll-component</h1>
//         <hr />
//         <InfiniteScroll
//           dataLength={state.items.length}
//           next={fetchMoreData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//         >
//           {state.items.map((i, index) => (
//             <div style={style} key={index}>
//               div - #{index}
//             </div>
//           ))}
//         </InfiniteScroll>
//     </div>

//   )
// }

// export default App


// //****************************************************************************** */


import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};



function App() {
const [state,setState]=useState({
  items: Array.from({ length: 20 }),
  hasMore:true,
})
  

 const fetchMoreData = () => {
   console.log("P:")
   if(state.items.length>=100){
   return;
   }
    setTimeout(() => {
      let arr=new Array(20)
     setState({items:[...state.items,...arr],hasMore:true});
    }, 500);
  };
  console.log(state)
  return (
    <div className="App">
     <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={state.items.length}
          next={fetchMoreData}
          hasMore={state.hasMore}
          loader={<h4>{state.items.length>=100 ? "done" :"Loading..."}</h4>}
        >
          {state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index+1}
            </div>
          )) }
        </InfiniteScroll>
    </div>

  )
}

export default App


//****************************************************************************** */

