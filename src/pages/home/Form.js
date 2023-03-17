import { useEffect, useState } from "react"
import { Button,TextField,Typography } from "@mui/material"
import { useFirestore } from "../../hooks/useFirestore";

export default function Form({uid}) {
    const [baslik,setBaslik]=useState("")
    const [miktar,setMiktar]=useState("");
    const {belgeEkle,response}=useFirestore("harcamalar");

    const handleSubmit=(e)=>{
      e.preventDefault();

      belgeEkle({uid,baslik,miktar});
    }

    useEffect(()=>{
      console.log(response)

      if(response.basari){
          setBaslik("")
          setMiktar("")
      }

    },[response.basari])

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h6" color="darkslateblue">Harcama Bilgisini Giriniz</Typography>
        <TextField label="Harcama Başlık" variant="standard" fullWidth required onChange={(e)=>setBaslik(e.target.value)} 
        value={baslik} />
        <TextField label="Harcama Miktar" variant="standard" fullWidth required onChange={(e)=>setMiktar(e.target.value)} 
        value={miktar} sx={{my:5}}/>
        <Button type="submit" variant="contained" color="secondary">EKLE</Button>
    </form>
  )
}
