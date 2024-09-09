import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {XAxis, YAxis, CartesianGrid, Legend, Bar,BarChart,PieChart, Pie,Cell} from "recharts";
import { getAllCountries } from "../actions/getinfo";
import Spinner from "./Spinner";

const COLORS = ['#1e0ee8', 'green'];



const Compare = () =>{

    const info = useSelector(state=>state.info.allinfo);
    const pending = useSelector(state=>state.info.pending);  
    
    const myData = Object.values(info);

    let firstCountry;

    if(myData.length==1){
        firstCountry=myData[0].name;
      }

    const [compareInfo,setCompareInfo] = useState([]);

    const [countries,setCountries] = useState([firstCountry]);

    const [population,setPopulation] = useState([]);
    const [area,setArea] = useState([]);

    const dispatch = useDispatch();

    const loadAllInfo=()=>{

      dispatch(getAllCountries());          

    }

    useEffect(()=>{

      const myData = Object.values(info);
      let data = [];

      if(countries.length>1){
        data= countries.split(',');
      }

      if(myData.length>1&&data.length==2){

        goCompare(); 
       }         
        


    },[info,pending])    

    const goCompare = ()=>{ 
      
      const data = countries.split(',');
      
      if(data.length!=2){
          alert('Please, input 2 countries and separeate with comma');
        }
      
      const myData = Object.values(info);
      
      if(myData.length<2){

          loadAllInfo();

          return;

        }    

    const newData = data.map(el=>{
            return el.charAt(0).toUpperCase() + el.slice(1);
        });

        

        if(myData.length>2){

        const toCompare = myData.filter(item=>{            
          
            
                if(newData.indexOf(item.name)>=0) return item;
           

        });  

        if(toCompare.length==2){

        setPopulation([{name:toCompare[0].name,value:toCompare[0].population},{name:toCompare[1].name,value:toCompare[1].population}]);  
        setArea([{name:toCompare[0].area,value:toCompare[0].area},{name:toCompare[1].area,value:toCompare[1].area}]);
       
        setCompareInfo(toCompare);  
        }
        else {
          alert('Error! Check the spelling of your counties names');
        }
        
      }        

    }

    return(
        <>
        
        <h1>Compare</h1>

        <h3>Input names of the countries to compare, use comma to separate</h3>

        <input type="text" defaultValue={countries.length==1?countries[0]:''} onChange={(e)=>setCountries(e.target.value)}/>

        <button onClick={goCompare} className="btn btn-primary">Go!</button>

        <Link className="m-3" to={'/'}><button className="btn btn-secondary">Back</button></Link>

        {pending?<Spinner/>:compareInfo.length==2?
        
    <div className="col-12 row justify-content-center">

    <div className="col-5 mt-5">

    <h3>Population {compareInfo[0].name} vs population {compareInfo[1].name}</h3>
  

<BarChart
          width={350}
          height={350}
          data={population}
          margin={{
            top: 15,
            right: 0,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis/>        
          <Legend />
 
          <Bar dataKey='value' fill="#8884d8" label={{ position: 'top'}} />         
          
        </BarChart>


  </div>
  <div className="col-5 mt-5">

    <h3><span style={{color:COLORS[1]}}>Area {compareInfo[0].name}</span> vs <span style={{color:COLORS[0]}}>area {compareInfo[1].name}</span></h3>
      
      <PieChart width={400} height={300}>
    <Pie data={area} dataKey="value" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
      {area.map((item,index)=>(

        <Cell key={index} fill={COLORS[COLORS.length-index-1]}/> 
        
      ))}      
    </Pie>

  </PieChart>
  </div>
  </div>:null}
        </>
    )
}

export default Compare;