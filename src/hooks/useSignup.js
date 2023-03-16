import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup=()=>{
    const [hata,setHata]=useState(null)
    const [bekliyor,setBekliyor]=useState(false)
    const {dispatch}=useAuthContext();

    const signup=async(email, password, displayName)=>{
        setHata(null)
        setBekliyor(true)
        try {
            const res=await createUserWithEmailAndPassword(auth, email, password)
            console.log(res)
            if(!res){
                throw new Error ("Üye olma işleminde hata oluştu")
            }

            await updateProfile(res.user,{displayName})
            dispatch({type:"LOGIN", payload:res.user})
            
            setBekliyor(false)
            setHata(null)
        } catch (err) {
            console.log(err.message);
            setHata(err.message)
            setBekliyor(false)
        }
    }

    return {signup, hata, bekliyor}
}