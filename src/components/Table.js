import { useState } from "react";
import { useTable } from "react-table";

export default function Table({data,columns,setData}){

    const [sortOrder,setSortOrder] = useState('asc');
    

    const handleSortingChange=(column)=>{

      sortOrder=='asc'?setSortOrder('desc'):setSortOrder('asc');

       let myColumn = column.Header;

       myColumn = myColumn.toLowerCase();

        let newData = [...data];     
        
        newData.sort((item1,item2)=>{           

        
        if(typeof item1[myColumn]==='string'){
        
            return (
              item1[myColumn].localeCompare(item2[myColumn]) * (sortOrder === "asc" ? 1 : -1)
             );
          }
          if(typeof item1[myColumn]==='number') {
    
              const res = item1[myColumn]-item2[myColumn];
    
              if(res==0){
                return 0;
              }
              if(res>0){
                return sortOrder === "asc" ? 1 : -1;
              }
              if(res<0){
                return sortOrder === "asc" ? -1 : 1;
              }
                                  
             };
            

        })
        
setData(newData);       

    }

    

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
      } = useTable({
        columns,
        data
      });

      return(

   <table className="mytable table align-middle table-sm table-success table-bordered table-striped table-hover" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column,accessor) => (
              <th className="hoveredTh" key={accessor} onClick={() => handleSortingChange(column)} {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
      )
}