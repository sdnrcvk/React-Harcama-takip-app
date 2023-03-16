import './Login.module.css'
import { Button, Container, Typography, FormControl, FilledInput, 
  InputLabel, InputAdornment, IconButton } from '@mui/material'
import { useState } from 'react'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const {login,hata,bekliyor}=useLogin();
  const navigate=useNavigate();

  const [values,setValues]=useState({
    email:"",
    password:"",
    showPassword:false
  })


  const handleChange=(prop)=>(event)=>{
    setValues({...values,[prop]:event.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(values);
    login(values.email,values.password);
    navigate("/");
  }

  const handleClickShowPassword=()=>{
    setValues({...values,showPassword:!values.showPassword})
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}> 
        <Typography sx={{mt:15, ml:5, fontWeight:"bold"}} variant="h4"
        color="darkslateblue">
            Giriş Yap
        </Typography>
        <FormControl fullWidth sx={{mt:5}}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput value={values.email} onChange={handleChange("email")} id="email" label="Email"/>
        </FormControl>
        <FormControl fullWidth sx={{my:5}}>
          <InputLabel htmlFor="password">Şifre</InputLabel>
          <FilledInput type={values.showPassword ? "text" : "password"} value={values.password} onChange={handleChange("password")}
           id="password" label="Password" endAdornment={
           <InputAdornment position='end'>
              <IconButton aria-label='Toggle Password' onClick={handleClickShowPassword}>{values.showPassword ? <Visibility/> : <VisibilityOff/>}</IconButton>
           </InputAdornment>}/>
        </FormControl>
        {bekliyor && <Button variant='outlined' disabled type='submit' color='info' size='large' sx={{mt:5}}>BEKLİYOR</Button>}
        {!bekliyor && <Button variant='outlined' type='submit' color='info' size='large' sx={{mt:5}}>GİRİŞ</Button>}
        {hata && <p>{hata}</p>}
      </form>
    </Container>
  )
}
