import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

function Header() {


  return (
    <AppBar position="absolute"
      sx={{ backgroundColor: 'white', width: '100%', color: 'black', zIndex: '0', paddingLeft: '6vw', paddingTop: '1vh'}}>

      <Typography sx={{ alignSelf: 'flex-start' }}>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'black',
            textDecoration: 'none',
            fontSize: '20px'
          }}
        >
          Ryan Perera
        </Typography>
        <Typography sx={{ mb: '1vh' }} color="text.secondary">

          Front-End Developer
        </Typography>

      </Typography>
    </AppBar>
  );
}
export default Header;