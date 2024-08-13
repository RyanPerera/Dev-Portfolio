import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {


    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ top: 'auto', bottom: 0 }}>
            <Typography sx={{ alignSelf: 'flex-end', color: 'white', fontSize: '40px', mr: '2vh', filter: 'drop-shadow(2px 2px 10px rgb(0 0 0 / 0.3))'}}>

                <a href='https://www.linkedin.com/in/ryan-perera/' target='_blank' rel="noreferrer">
                    <LinkedInIcon fontSize="larger" />
                </a>

                <br />

                <a href='https://ryanperera.github.io/ciphercollector/' target='_blank' rel="noreferrer">
                    <GitHubIcon fontSize="larger" />
                </a>

            </Typography>
        </AppBar>
    );
}
export default Footer;