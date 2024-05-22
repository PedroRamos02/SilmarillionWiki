import { Box, Typography } from "@mui/material";


export default function SectionParallax () {
    return (
        <Box component="section" 
            sx={{
                display:'flex',
                textAlign: 'center',
                flexDirection:'column',
                justifyContent:'center',
                height:'100vh',
                width:'100%',
                position: 'relative',
                overflow: 'hidden', 
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage:'url("../src/assets/silmarillion_capa.jpg")',
                '&:after':{
                    
                    height: '100%',
                    width: '100%',
                    position: "absolute",
                    zIndex: '8',
                    background:'linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100% );',
                }
            }}>
                <Typography
                    sx={{
                        fontSize: '7em',
                        fontWeight: 500,
                    }}
                >
                    Silmarillion
                </Typography>
                <Typography
                sx={{
                    fontSize: '4em',
                    fontWeight: 400,
                }}>
                    A historia da terra media
                </Typography>
        </Box>
    )
}