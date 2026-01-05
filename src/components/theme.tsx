"use client";
import { createContext,useContext } from "react";

type Theme = {
  color:{
    primary: string;
    scondary:string;
  }
}
const defaultTheme:Theme={
  color:{
     primary: "#0890b9ff",
    scondary:"#0034"
  }
}
const Themecontext= createContext<Theme>(defaultTheme );
import React from 'react'
 export const ThemeProvider=({children}:{children:React.ReactNode})=>{
    return (
        <Themecontext.Provider value={defaultTheme}>
            {children}
        </Themecontext.Provider>
    )
    }
    export const useTheme = ()=>useContext(Themecontext);
function theme() {
   
  return (
    <div>theme</div>
  )
}

export default theme