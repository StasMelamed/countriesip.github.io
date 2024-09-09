import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIinfo,getAllCountries} from "../actions/getinfo";
import { cleanAll } from "../slices/info";
import CountryInfo from "./CountryInfo";
import AllCountries from "./AllCountries";
import Spinner from "./Spinner";
import { allCountriesNames } from "../constants/constants";


const Start = ()=>{

    const pending = useSelector(state=>state.info.pending);
    const info = useSelector(state=>state.info.allinfo);
    const err = useSelector(state=>state.info.error);

    const [countryName,setCountryName] = useState('');

    const [foundNames,setFoundNames] = useState([]);

    
    const[myData,setData] = useState([{}]);

    const [allCountries,setAllCountries] = useState(false);
    
    const dispatch = useDispatch();

    const rearrrangeData = (data)=>{
      
                   setData(data);
        }

    

    useEffect(()=>{

        if(info!=null){       

        const getDataValues = Object.values(info);   
        
        setData(getDataValues);     
        
      }
      
    },[info,pending]);

         

    const cleanError  = ()=>{
        dispatch(cleanAll());
}

    const loadInfo = ()=>{
      
      dispatch(getAllIinfo(countryName));    
      
      setAllCountries(false);
       
    }

    const nameChosen=(name)=>{

      setCountryName(name);

    const test = document.getElementById('test');

     test.innerHTML='';
     test.style.border='none';

     
     
    }

    const loadAllInfo=()=>{

      dispatch(cleanAll());
      dispatch(getAllCountries());

      setAllCountries(true);      

    }

    if(err){

alert(err);
cleanError();
    } 

    function getNames(){

const test = document.getElementById('test');

test.innerHTML='';

const value = document.getElementById('myInput').value.toLowerCase();

const valueLength = value.length;

let fnames =[];

for(let country of allCountriesNames){

  const counntryS = country.toLowerCase();

  let countrySliced = counntryS.split('',valueLength).join('');
  

if(countrySliced==value){  

  fnames.push(country);
}
}

fnames.sort();

setFoundNames(fnames);

 

for(let name of foundNames){
  const div = document.createElement('div');
  const ah = document.createElement('a');
ah.appendChild(document.createTextNode(name));
ah.addEventListener('click', ()=>nameChosen(name));

div.appendChild(ah);
test.appendChild(div);

}
    }   


    return(

<div>

<h2>Countries of the World</h2>
<div className="row col-12 justify-content-center">
<div className="row col-10 justify-content-center">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class=" scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
  <div className="inputMy col-3">
    <input className="myinput col-10" type="text" id="myInput" value={countryName} onKeyUp={()=>getNames()} onFocus={()=>setCountryName('')} onChange={(e)=>setCountryName(e.target.value)}>
    </input>
    <div id='test' className="testField col-10">
    </div>
    </div>
    
    


  

  
  <button className="btn m-3 btn-primary col-3" onClick={loadInfo}>Load info about the chosen country</button>
</div>



    
    
    

<div className="row col-10 justify-content-center">

<button className="btn m-3 btn-success col-3" onClick={loadAllInfo}>Load info about all countries</button>


</div>
<div style={{width:'100%',height:'fit-content'}} id='names'></div>



{pending?<Spinner/>:myData[0].name!=null?
<div className="centerblock justify-content-center col-12">    
    {allCountries?
    <AllCountries myData={myData} rearrrangeData={rearrrangeData}/>:<></>}
    

{!allCountries&&myData.length<2?   

    <CountryInfo myData={myData}/>:<></>} 
    
    
    </div>:
    <div className="row justify-content-center">
      <div className="col-12"><h3>No info yet</h3>           
      </div>   

      {/* <div id='test' style={{width:'100%',height:'fit-content'}} className="col-12">            */}
       
    
    </div>
    
    
    }
</div>
</div>

    )
}

export default Start;

