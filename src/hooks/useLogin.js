import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin=()=>{
    const [hata,setHata]=useState(null)
    const [bekliyor,setBekliyor]=useState(false)
    const {dispatch}=useAuthContext();

    const [iptal,setIptal]=useState(false);

    useEffect(()=>{
        return ()=>setIptal(true)
    },[])

    const login=async(email, password)=>{
        setHata(null)
        setBekliyor(true)
        try {
            const res=await signInWithEmailAndPassword(auth, email, password)
            console.log(res.user)

            if(!res){
                throw new Error ("Giriş işleminde hata oluştu")
            }

            dispatch({type:"LOGIN", payload:res.user})

            if(!iptal){
                setBekliyor(false)
                setHata(null)
            }
        } catch (err) {
            if(!iptal){
                console.log(err.message);
                setHata(err.message)
                setBekliyor(false)
            }
        }
    }

    return {login, hata, bekliyor}
}