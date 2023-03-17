import './Home.module.css'
import { Grid,Paper,Container } from '@mui/material'
import { useAuthContext } from '../../hooks/useAuthContext'
import Form from './Form'
import Liste from './Liste'
import { useCollection } from '../../hooks/useCollection'

export default function Home() {
  const {user}=useAuthContext();
  const {belgeler,hata}=useCollection("harcamalar",["uid","==",user.uid]);

  return (
    <Container sx={{mt:8}}>
      <Grid container spacing={10}>
        <Grid item md={5} sm={12} xs={12}>
            <Form uid={user.uid}/>
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          {hata && <p>{hata}</p>}
          {
            belgeler && <Liste harcamalar={belgeler}/>
          }
        </Grid>
      </Grid>
    </Container>
  )
}
