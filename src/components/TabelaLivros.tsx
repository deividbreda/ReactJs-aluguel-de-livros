import { useState } from "react";
import { FaTrashAlt, FaEye, FaLevelDownAlt } from "react-icons/fa";
import { Livro, useLivro } from "../hooks/useLivros";
import { ModalLivroDetailed } from "./ModalLivroDetailed";
import { ModalLivroAlugar } from "./ModalLivroAlugar";

interface LivroListProps {
    livros: Livro[];
}

export function TabelaLivros({ livros }: LivroListProps){
    const { alugaLivro, removeLivro } = useLivro();

    const [novoModalView, setNovoModalView] = useState(false);
    const [novoModalAluga, setNovoModalAluga] = useState(false);

    const [livroView, setLivroView] = useState<Livro[]>([])
    const [livroAluga, setLivroAluga] = useState<Livro[]>([])

    function handleOpenViewLivro(id: number){    
        const filtraLivro = livros.filter(idLivro => idLivro.id === id)
        setLivroView(filtraLivro);
        setNovoModalView(true);
    }

    function handleRemoveLivro(id: number){
        removeLivro(id)
    }

    function handleCloseViewLivro(){
        setNovoModalView(false);
    }

    function handleOpenModalAluga(livro: Livro){
        const alugaLivro = livros.filter(idLivro => idLivro.id === livro.id)
        setLivroAluga(alugaLivro)
        setNovoModalAluga(true);
    }

    function handleCloseModalAluga(){
        setNovoModalAluga(false);
    }
    
    return(    
        <>
        <ModalLivroDetailed isOpen={novoModalView} onRequestClose={handleCloseViewLivro} item={livroView} />
        <ModalLivroAlugar isOpen={novoModalAluga} onRequestClose={handleCloseModalAluga} item={livroAluga} />

        {livros.length ? 
        <table>
            <thead>
                <tr>
                    <th> Título </th>
                    <th> Autor </th>
                    <th> Gênero </th>
                </tr>
            </thead>

            <tbody>
                {livros.map(livro => {
                    return(
                        <tr key={livro.id}>
                            <td> {livro.titulo} </td>
                            <td> {livro.autor} </td>
                            <td> {livro.genero} </td>
                            <td> 
                                <div className="botaoTabela"> 
                                    <button className="botaoAlugar" onClick={() => handleOpenModalAluga(livro)}> {<FaLevelDownAlt/>} </button>
                                    <button className="botaoVer" onClick={() => handleOpenViewLivro(livro.id)}> {<FaEye/>} </button>
                                    <button className="botaoRemover"  onClick={() => handleRemoveLivro(livro.id)}>  {<FaTrashAlt/>} </button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        : 
        <h1 className="validacaoPesquisa"> Nenhum livro encontrado </h1>
        }
        </>                                                                                                     
    );
}