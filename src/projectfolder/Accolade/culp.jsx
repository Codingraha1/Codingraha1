import { useState } from "react";
import './indicate.css'
import  data from  './info'


 function Cusping(){
   const [datagathered,setDataGathered]=useState(null);
   const [multiselection,setMulitselection]=useState(false);
   const [multiple,setMultiple]=useState([])
        
          function handleselection(getcurrentid){
            
            setDataGathered(getcurrentid===datagathered?null:getcurrentid);
          }
          function handlemultiselection(getcurrentid){
            let cpymultiple=[...multiple]
            const findindexofcurrentid=multiple.indexOf(getcurrentid)
            if(findindexofcurrentid===-1){
              cpymultiple.push(getcurrentid)
            }
            else{
              cpymultiple.splice(findindexofcurrentid,1)
            }
            setMultiple(cpymultiple)
            console.warn(findindexofcurrentid)
          }
   return (
    <div className="blabber">
      <button onClick={()=>setMulitselection(!multiselection)}>multi selection</button>
    <div className="accord">
      {data && data.length > 0 ? (
        data.map((dataitem,i) => (
          <div key={i} className="stylingit">
            <div className="buddy"></div>
            <div className="title" onClick={multiselection?()=>handlemultiselection(dataitem.id):()=>handleselection(dataitem.id)}>
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





export default Cusping;