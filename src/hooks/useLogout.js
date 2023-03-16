import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout=()=>{
    const [hata,setHata]=useState(null)
    const [bekliyor,setBekliyor]=useState(false)
    const {dispatch}=useAuthContext();

    const logout=async()=>{
        setHata(null)
        setBekliyor(true)
        try {
            await signOut(auth);

            dispatch({type:"LOGOUT", payload:res.user})
            
            setBekliyor(false)
            setHata(null)
        } catch (err) {
            console.log(err.message);
            setHata(err.message)
            setBekliyor(false)
        }
    }

    return {logout, hata, bekliyor}
}