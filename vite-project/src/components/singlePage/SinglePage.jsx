import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import s from '../singlePage/Single.module.scss'
import axios from '../../api'
export const SinglePage = () => {
    const [data,setData]= useState(null)
    let params = useParams()
   
    useEffect(()=>{
     const api = async()=>{
         try{
         let responce =  await axios(`/shows/${params.id}`)
         setData(responce.data);
         }catch(error){
             alert(error)
         }
     } 
     api()
    },[data])
  
    return (  
        <div className={s.all}>
         
              <div className={s.allParent}>   
      
            {
               
               data ?  <div className={s.card}>
               <img className={s.cardImg} src={data.image.medium} alt="" />
                <div className={s.cardBody}>
                <h1 className={s.cardTit}>{data.name}</h1>
                 <h2 className={s.cardSubtit}>{data.language}</h2>
                 <h3 className={s.cardtittwo}>{data.genres}</h3>
                 <p className={s.cardText}>{data.rating.average}</p>
                 <a className={s.cardLink} href={data.url}>Watch Movie</a>
                </div>
               </div> :<></>
            }
        </div>
        </div>
      
      )
}
