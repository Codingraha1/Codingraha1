import { useState } from "react";
import './indicate.css'
import  data from  './info'


 function Cusping(){
   const [datagathered,setDataGathered]=useState(null);
   
          function handleselection(getcurrentid){
            
            setDataGathered(getcurrentid===datagathered?null:getcurrentid);
          }
   return (
    <div className="blabber">
        
    <div className="accord">
      {data && data.length > 0 ? (
        data.map((dataitem,i) => (
          <div key={i} className="stylingit">
            <div className="title" onClick={()=>handleselection(dataitem.id)}>
              <h3>{dataitem.question}</h3>
              <span>+</span>
            </div>
            {
              datagathered===dataitem.id?<div className="cnt">{dataitem.answer}</div>:null
            }
          </div>
        ))
      ) : (
        <div>No data found!</div>
      )}
    </div>
    
  </div>
   )  
      }


      // this is single selection 




export default Cusping;