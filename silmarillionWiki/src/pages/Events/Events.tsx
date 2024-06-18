import { Box } from "@mui/material";
import { CardEvents } from "../../components/CardsEvents/CardsEvents";

export default function Events () {
    return (
        <Box 
            sx={{
               width: '100%',
               height: '100vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center' 
            }}>
            <CardEvents
                numeroCard="1"
                tituloCard="Ainulindalë"
                textoCard="A Música da criação do universo da Terra Média, composta por Eru e os Valar. Ocorreu antes do início do Tempo, a qual originou Eä, o Universo material."
                imgCard='../src/assets/ainulindale.jpg'
            />
            <CardEvents
                numeroCard="2"
                tituloCard="Batalha dos Poderes"
                textoCard="A grande batalha travada entre os Valar e Melkor, o ser mais sábio e poderoso de toda Arda"
                imgCard='../src/assets/utummo.jpg'
            />
            <CardEvents
                numeroCard="3" 
                tituloCard="Criação das Silmarils" 
                textoCard="Fëanor capturou luz das Duas Árvores de Valinor, e por meios desconhecidos, conteve-a, imperecível, em três grandes pedras preciosas semelhantes a diamantes" 
                imgCard= '../src/assets/silmarils_.jpg'/>
            <CardEvents 
                numeroCard="4" 
                tituloCard="A vingança de Morgoth" 
                textoCard="Melkor alia-se ao ser maligno Ungoliant, juntos destroem as Duas Árvores e rouba as Silmarils." 
                imgCard='../src/assets/ungAndMelkor.jpg' />
            <CardEvents 
                numeroCard="5" 
                tituloCard="Beren e Lúthien" 
                textoCard="Iniciasse o romance e a jornada épica de Beren, um homem mortal, e Lúthien, uma princesa élfica." 
                imgCard='../src/assets/berenLuthien.jpg' />
            <CardEvents 
                numeroCard="6" 
                tituloCard="Filhos de Húrin" 
                textoCard="Húrin, um dos maiores guerreiros humanos de antigas eras, é aprisionado por Morgoth e condenado a acompanhar todas as tragédias vividas por seus filhos" 
                imgCard='../src/assets/turin.jpg' />
            <CardEvents 
                numeroCard="7" 
                tituloCard="Guerra da Ira" 
                textoCard="O grande marco do fim da primeira era, a maior batalha que a Terra Média já testemunhou" 
                imgCard='../src/assets/War_of_Wrath.webp' />
            <CardEvents 
                numeroCard="8" 
                tituloCard="Queda de Númenor" 
                textoCard="O maior reino dos Homens acaba sendo consumido pelos oceanos após o seu povo declarar guerra aos Valar" 
                imgCard='../src/assets/quedaDeNumenor.jpg' />
        </Box>
    )
}