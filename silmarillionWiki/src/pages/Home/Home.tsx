import { Box, TextField, Typography } from "@mui/material";
import SectionParallax from "../../components/SectionParallax/SectionParallax";


export default function Home () {
    return (
        <>
        <SectionParallax />
        <Box
            component="section"
            sx={{
                display: 'flex',
                textAlign: 'center',
                height: '100vh',
                width: '100vh',
                backgroundColor: 'lightblue',
            }}
        >
            <Typography
            sx={{
                textSize: '1.7em',
            }}>
                O Silmarillion é o relato dos Dias Antigos da Primeira Era do mundo criado por J.R.R. Tolkien. É a história longínqua para a qual os personagens de O Senhor dos Anéis e O Hobbit olham para trás, e em cujos eventos alguns deles, como Elrond e Galadriel, tomaram parte. Os contos de O Silmarillion se passam na época em que Morgoth, o Primeiro Senhor Sombrio, habitava a Terra-média, e os Altos-Elfos guerreavam contra ele pela recuperação das Silmarils, as joias que continham a pura luz de Valinor. O livro começa com o "Ainulindalë", o mito da criação do Universo, seguido pelo "Valaquenta", onde estão descritas a natureza e os poderes de cada um dos deuses. 
            </Typography>
        </Box>
        </>
    )
}