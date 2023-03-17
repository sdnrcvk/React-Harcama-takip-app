import { useEffect,useState,useReducer } from "react";
import { db } from "../firebase/config";
import { collection,addDoc,serverTimestamp,doc, deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const baslangicVeri={
    belge:null,
    bekliyor:false,
    hata:null,
    basari:null
}

const firestoreReducer=(state,action)=>{
    switch (action.type) {
        case "BEKLIYOR":
            return {hata:null,belge:null,basari:false,bekliyor:true}
        case "BELGE_EKLENDI":
            return {hata:null,belge:action.payload,basari:true,bekliyor:false}
        case "HATA":
            return {hata:action.payload,belge:null,basari:false,bekliyor:false}
        case "BELGE_SILINDI":
            return {hata:null,belge:null,basari:true,bekliyor:false}
        default:
            return state;
    }
}

export const useFirestore=(col)=>{
    
    const [response,dispatch]=useReducer(firestoreReducer,baslangicVeri);
    const [iptal,setIptal]=useState(false)

    const ref=collection(db,col);
    
    const belgeEkle=async (belge)=>{

        dispatch({type:"BEKLIYOR"})

        try {

            const olusturulmaTarih=serverTimestamp();
            const eklenenBelge=await addDoc(ref,{...belge,olusturulmaTarih})

            if(!iptal){
                dispatch({type:"BELGE_EKLENDI",payload:eklenenBelge})
            }

        } catch (err) {
            if(!iptal){
                dispatch({type:"HATA",payload:err.message})
            }
        }
    }

    const belgeSil=async(id)=>{

        dispatch({type:"BEKLIYOR"})

        try {

            let ref=doc(db,col,id);
            await deleteDoc(ref);
            
            if(!iptal){
                dispatch({type:"BELGE_SILINDI"})
            }
            
        } catch (err) {
            if(!iptal){
                dispatch({type:"HATA",payload:err.message})
            }
        }
    }

    useEffect(()=>{
        return ()=>setIptal(true)
    },[])

    return {belgeEkle,belgeSil,response}
}