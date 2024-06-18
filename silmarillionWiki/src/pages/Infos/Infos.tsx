import { SectionInfo } from "../../components/SectionInfo/SectionInfo";



const images = [
    {
      src: '../src/assets/morgothVsFingolfin.jpg',
      title: 'Título 1',
      description: 'Descrição 1',
    },
    {
      src: '../src/assets/gondolin.jpg',
      title: 'Título 2',
      description: 'Descrição 2',
    },
    {
      src: '../src/assets/ancalagon.jpg',
      title: 'Título 3',
      description: 'Descrição 3',
    },
    {
      src: '../src/assets/caisEmChamas.jpg',
      title: 'Título 3',
      description: 'Descrição 3',
    },
    {
      src: '../src/assets/maedhros.jpg',
      title: 'Título 3',
      description: 'Descrição 3',
    },
  ];
  

export default function Infos () {
    return(
        <SectionInfo images={images}/>
    )
}