import './Home.module.css'
import { Grid,Paper,Container } from '@mui/material'
import { useAuthContext } from '../../hooks/useAuthContext'
import Form from './Form'

export default function Home() {
  const {user}=useAuthContext();

  return (
    <Container sx={{mt:8}}>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
            <Paper>Liste</Paper>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
            <Form uid={user.uid}/>
        </Grid>
      </Grid>
    </Container>
  )
}
