import React,{useEffect, useState} from 'react'
import ImageUpload from './ImageUpload'
import Table from './Table';
import CircularProgress from '@mui/material/CircularProgress';
export default function Main() {
  const [uploads,setUploads]=useState(localStorage.getItem('uploads')?JSON.parse(localStorage.getItem('uploads')):[]);
  const [totalUploads,setTotalUploads]=useState(localStorage.getItem('uploads')?JSON.parse(localStorage.getItem('uploads')).length : 0);
  const createData=(name, date,cid,cidurl)=>{
    console.log("i am in create");
    
    setUploads(uploads=>{
      const newUploads=[...uploads];
      newUploads.push({name,date,cid,cidurl});
      localStorage.setItem('uploads',JSON.stringify(newUploads));
      console.log(newUploads);
      return newUploads;
    });
  
   
  }

  
  useEffect(()=>{
    console.log(uploads);
    console.log(totalUploads+">>>>>>>>>>>>>>>>>>>>>updated");
    localStorage.setItem('uploads',JSON.stringify(uploads));
  },[totalUploads,uploads]);
  return (
    
      totalUploads>uploads.length?<div className="flex flex-col justify-center items-center h-screen">
      <CircularProgress/>
      <p>Uploading File</p>
      </div>
      :
    
    <div className='flex flex-col items-center main'>
        <ImageUpload createData={createData} setTotalUploads={setTotalUploads} multipleFiles={false}></ImageUpload>
        <ImageUpload createData={createData} setTotalUploads={setTotalUploads} multipleFiles={true}></ImageUpload>
        <Table uploads={uploads} setUploads={setUploads}></Table>
    </div>


  )
}
