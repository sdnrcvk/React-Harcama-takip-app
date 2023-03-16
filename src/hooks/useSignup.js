import { useState } from "react";
import { Auth } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "../firebase/config";

export const useSignup=()=>{
    const [hata,setHata]=useState(null)
    const [bekliyor,setBekliyor]=useState(false)

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