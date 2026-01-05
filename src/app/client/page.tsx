"use client"
import { useTheme } from '@/components/theme'
import React, { useEffect, useState } from 'react'

function page() {
      const theme=  useTheme();
     const [value , setValue] =useState(theme.color.primary);
      useEffect(()=>{
      setValue("rgba(26, 224, 86, 1)");
      },[handletheme]);
      function handletheme(){
        setValue("#0c99eaff")
      }
  return (

    <div>
        <h1 style={{color:value}}>
          Hi I am coming from Change color
        </h1>
        <button onClick={()=>handletheme}> Other Theme</button>
    </div>
  )
}

export default page