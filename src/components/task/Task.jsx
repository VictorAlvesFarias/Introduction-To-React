import React from 'react'
import {memo} from 'react'
import "./Task.css"
import  junkIcon from "../../assets/junk.png"
import  starIconEmpty from "../../assets/star.png"
import  starIconFull from "../../assets/star-full.png"
import  verifyIconFull from "../../assets/verify-full.png"
import  verifyIconEmpty from "../../assets/verify.png"


const Task = (item) => {
  console.log(item)
  return (

    <div className='task'>
        <div className='task_title'>
          <h2>{item.title}</h2>
          <div className='task_settings' >
            <button onClick={()=>item.handleAddFavorite(item.id)}><img src= {item.favorite?starIconFull:starIconEmpty} alt="" /></button>
            <button onClick={()=>item.handleAddComplete(item.id)}><img src= {item.complete?verifyIconFull:verifyIconEmpty} alt="" /></button>
            <button onClick={()=>item.handleDelete(item.id)} ><img src={junkIcon} alt="" /></button>            
          </div>
        </div>
        <div className='task_description'>
          {item.description}
        </div>
        <div>
          {item.date}
        </div>
    </div>
  )
}

export default memo(Task)