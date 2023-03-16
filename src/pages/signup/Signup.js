import './Signup.module.css'
import { Button, Container, Typography, FormControl, OutlinedInput, 
  InputLabel, InputAdornment, IconButton } from '@mui/material'
import { useState } from 'react'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const {signup,hata,bekliyor}=useSignup();
  const [values,setValues]=useState({
    email:"",
    password:"",
    showPassword:false,
    username:""
  })


  const handleChange=(prop)=>(event)=>{
    setValues({...values,[prop]:event.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(values);
    signup(values.email, values.password, values.username);
  }

  const handleClickShowPassword=()=>{
    setValues({...values,showPassword:!values.showPassword})
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}> 
        <Typography sx={{mt:15, ml:5, fontWeight:"bold"}} variant="h4"
        color="darkslateblue">
            Üye Ol
        </Typography>
        <FormControl fullWidth sx={{mt:5}}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput value={values.email} onChange={handleChange("email")} id="email" label="Email"/>
        </FormControl>
        <FormControl fullWidth sx={{mt:5}}>
          <InputLabel htmlFor="password">Şifre</InputLabel>
          <OutlinedInput type={values.showPassword ? "text" : "password"} value={values.password} onChange={handleChange("password")}
           id="password" label="Password" endAdornment={
           <InputAdornment position='end'>
              <IconButton aria-label='Toggle Password' onClick={handleClickShowPassword}>{values.showPassword ? <Visibility/> : <VisibilityOff/>}</IconButton>
           </InputAdornment>}/>
        </FormControl>
        <FormControl fullWidth sx={{my:5}}>
          <InputLabel htmlFor="username">Kullanıcı Adı</InputLabel>
          <OutlinedInput value={values.username} onChange={handleChange("username")} id="username" label="Username"/>
        </FormControl>
        {!bekliyor && <Button variant='contained' type='submit'
        color='info' size='large' sx={{mt:5}}>Üye Ol</Button>}
        {bekliyor && <Button disabled variant='contained' type='submit'
        color='info' size='large' sx={{mt:5}}>BEKLİYOR</Button>}
        {hata && <p>{hata}</p>}
      </form>
    </Container>
  )
}
