import { useState,useEffect } from "react";
import { db } from "../firebase/config";
import { collection,onSnapshot } from "firebase/firestore";

export const useCollection=(col)=>{
    const [belgeler,setBelgeler]=useState(null)
    const [hata,setHata]=useState(null)

    useEffect(()=>{
        let ref=collection(db,col);
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