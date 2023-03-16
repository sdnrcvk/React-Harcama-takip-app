import styles from './Navbar.module.css'
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material"
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'

export default function Navbar() {
    const {logout}=useLogout();

  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography variant='h6'component='div' sx={{flexGrow:1}}>
                    <Link component="button" to="/" className={styles.link}>Harcama Takip App</Link>
                </Typography>
                <Button variant="outlined" color='inherit'>
                    <Link component="button" className={styles.link} to="/login">GİRİŞ YAP</Link>
                </Button>
                <Button variant="text" color='secondary'>
                    <Link component="button" className={styles.link} to="/signup">Üye Ol</Link>
                </Button>
                <Button variant="contained" onClick={logout} color='secondary' sx={{ml:5}}>
                    Çıkış Yap
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
