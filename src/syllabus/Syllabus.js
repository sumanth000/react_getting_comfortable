import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import syllabusDataJson from './data_folder/syllabusData.json'


import './css_folder/syllabus.css'

const Syllabus=()=>{

  const[syllabusData,setSyllabusData]=useState([]);



    let columnHeaders=[
// { field: 'id',headerName: 'id',flex:1,align:'center',headerAlign:'center' }, 
{ field: 'number',headerName: 'S. NO',flex:1,align:'center',headerAlign:'center' }, 
{ field: 'category',headerName: 'Category',flex:1,align:'center',headerAlign:'center' }, 


{ field: 'name',headerName: 'NAME',flex:1,align:'center',headerAlign:'center' }
]

useEffect(()=>{

    setSyllabusData(syllabusDataJson.map((e,index)=>{return {...e,number:index+1}}));
},[syllabusDataJson])


    return (
        <div>
 <DataGrid

autoHeight
columns={columnHeaders}
rows={syllabusData}
getRowId={(row) => row.id}

>

</DataGrid>
        </div>
    )

}




export default Syllabus;