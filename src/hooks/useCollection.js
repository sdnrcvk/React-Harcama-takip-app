import { useState,useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection,onSnapshot,quer,query,where } from "firebase/firestore";

export const useCollection=(col,_query)=>{
    const [belgeler,setBelgeler]=useState(null)
    const [hata,setHata]=useState(null)

    const q=useRef(_query).current;

    useEffect(()=>{
        let ref=collection(db,col);

        if(q){
            ref=query(ref,where(...q))
        }

        const unsubcribe=onSnapshot(ref, snapshot=>{
            let sonuclar=[];

            snapshot.docs.forEach(doc=>{
                sonuclar.push({...doc.data(),id:doc.id})
            })

            setBelgeler(sonuclar)
            setHata(null);
        },err=>{
            console.log(err);
            setHata("Veriler getirilemedi");
        })

        return ()=>unsubcribe();
    },[col])

    return {belgeler,hata}

}