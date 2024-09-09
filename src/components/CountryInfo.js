import { useEffect, useState } from "react";
import Table from "./Table";
import { Link } from "react-router-dom";
import { columns } from "../constants/constants";
import { PieChart,Pie} from "recharts";
import { Cell } from "recharts";
import { worldPopulation,europePopulation,africaPopulation,asiaPopulation,AmericasPopulation,europeArea,asiaArea,africaArea,americasArea,australiaArea } from "../constants/constants";
import { useSelector } from "react-redux";


const COLORS = ['#1e0ee8', '#9aaec9'];

const CountryInfo =({myData})=>{

    const [population,setPopulation] = useState([]);
    const [regionPop,setRegionPop] = useState([]);
    const [regionArea,setRegionArea] = useState([]);


    useEffect(()=>{

        const test = document.getElementById('test');
        test.innerHTML='';
    
        setPopulation([{name:'World',value:worldPopulation},{name:myData[0].name,value:myData[0].population}]);  
        setRegionPop([{name:myData[0].region,value:myData[0].region=='Asia'?asiaPopulation:myData[0].region=='Europe'?europePopulation:myData[0].region=='Africa'?africaPopulation:myData[0].region=='Americas'?AmericasPopulation:worldPopulation},{name:myData[0].name,value:myData[0].population}]);  
        setRegionArea([{name:myData[0].region,value:myData[0].region=='Asia'?asiaArea:myData[0].region=='Europe'?europeArea:myData[0].region=='Africa'?africaArea:myData[0].region=='Americas'?americasArea:australiaArea},{name:myData[0].name,value:myData[0].area}]);  
    },[])

    return(
        <>
      <h1>{myData[0].name}</h1>
<div className="row justify-content-center col-12">

<Link className="col-3" to={'Compare'}><button className="btn m-3 btn-primary">Compare with...</button></Link>

    <div className="row col-10 table-responsive">
    <Table columns={columns} data={myData}/>
    </div></div>
    <div className="col-12 row justify-content-center">

      <div className="col-4">

    <h3>World population vs {myData[0].name} population</h3>
      
      <PieChart width={450} height={400}>
    <Pie data={population} dataKey="value" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
      {population.map((item,index)=>(

        <Cell key={index} fill={COLORS[COLORS.length-index-1]}/> 
        
      ))}      
    </Pie>

  </PieChart>
  </div>
  <div className="col-4">

    <h3>{myData[0].region} population vs {myData[0].name} population</h3>
      
      <PieChart width={450} height={400}>
    <Pie data={regionPop} dataKey="value" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
      {regionPop.map((item,index)=>(

        <Cell key={index} fill={COLORS[COLORS.length-index-1]}/> 
        
      ))}      
    </Pie>

  </PieChart>
  </div>
  <div className="col-4">

<h3>{myData[0].region} area vs {myData[0].name} area</h3>
  
  <PieChart width={450} height={400}>
<Pie data={regionArea} dataKey="value" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label>
  {regionArea.map((item,index)=>(

    <Cell key={index} fill={COLORS[COLORS.length-index-1]}/> 
    
  ))}      
</Pie>

</PieChart>
</div>


    </div>
    
    </>
    )
  }

  export default CountryInfo;