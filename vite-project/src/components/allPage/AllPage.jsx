import React, { useEffect,useState } from 'react'
import axios from '../../api'
import { Link } from "react-router-dom";

import a from '../allPage/AllPage.module.scss'
function AllPage() {
    const [data,setData]= useState([])
    const [page,setPage]= useState(1)
    const [degree,setDegree]= useState(12)
   
   useEffect(()=>{
    const api = async()=>{
        try{
        let responce =  await axios("/shows")
       // setData(responce.data);
        setData(responce.data.slice(0,page *degree))
        }catch(error){
            alert(error)
        }
    } 
   

    api()
   },[page])
 
  return (  
    <div className={a.all}>
        <input className={a.all__inp} type="search" placeholder='search' />
          <div className={a.allParent}>   
  
        {
            data.map(users=>{
                //console.log(users);
              return(
              <div key={users.id} className={a.card}>
              <Link to={`/single/${users.id}`}><img className={a.cardImg} src={users.image.medium} alt="" /></Link>
               <div className={a.cardBody}>
               <h1 className={a.cardTit}>{users.name}</h1>
                <h2 className={a.cardSubtit}>{users.language}</h2>
                <h3 className={a.cardtittwo}>{users.genres}</h3>
                <p className={a.cardText}>{users.rating.average}</p>
                <a className={a.cardLink} href={users.url}>Watch Movie</a>
               </div>
              </div>
              )
            })
        }
    </div>
        <button className={a.all__btn} onClick={()=>setPage(page+1)}>Show More</button>
    </div>
  
  )
}

export default AllPage