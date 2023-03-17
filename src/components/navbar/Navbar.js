import styles from './Navbar.module.css'
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material"
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Navbar() {
    const {logout}=useLogout();
    const {user}=useAuthContext();

  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='warning'>
            <Toolbar>
                <Typography variant='h6'component='div' sx={{flexGrow:1}}>
                    <Link component="button" to="/" className={styles.link}>HarcamaTakip</Link>
                </Typography>
                {!user && (
                    <>
                    <Button variant="outlined" color='secondary'>
                        <Link component="button" className={styles.link} to="/login">GİRİŞ YAP</Link>
                    </Button>
                    <Button variant="text" color='secondary'>
                        <Link component="button" className={styles.link} to="/signup">Üye Ol</Link>
                    </Button>
                    </>
                )}
                {user && (
                    <>
                    <Typography>Merhaba, {user.displayName} </Typography>
                    <Button variant="contained" onClick={logout} color='secondary' sx={{ml:5}}>
                        Çıkış Yap
                    </Button>    
                    </>
                )}
            </Toolbar>
        </AppBar>
    </Box>
  )
}
