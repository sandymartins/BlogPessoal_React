import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    foto: string;
    texto: string;
    tema?: Tema| null;
}

export default Postagem;