import Table from "./Table";
import { Link } from "react-router-dom";
import { columns } from "../constants/constants";

const AllCountries =({myData,rearrrangeData})=>{

 

   return(
        <>
      <h3>All countries</h3>
<div className="row justify-content-center col-12">

  
<Link className="col-3" to={'Compare'}><button className="btn m-3 btn-primary">Compare</button></Link>



    <div className="row col-10 table-responsive">
    <Table columns={columns} data={myData} setData={rearrrangeData}/>
    </div></div></>
    )
  }

  export default AllCountries;