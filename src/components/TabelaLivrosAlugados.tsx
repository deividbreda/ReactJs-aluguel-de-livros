import { useState } from "react";
import { FaLevelUpAlt, FaInfoCircle } from "react-icons/fa";
import { Livro, LivroAlugado, useLivro } from "../hooks/useLivros";
import { ModalInfoLivroAlugado } from "./ModalInfoLivroAlugado";

interface TabelaLivrosAlugadosProps {
    livros: LivroAlugado[];
}

export function TabelaLivrosAlugados({ livros }: TabelaLivrosAlugadosProps){
    const { devolveLivroAlugado, livrosAlugados } = useLivro();

    const [modalInfoLivroAlugado, setModalInfoLivroAlugado] = useState(false);
    const [infoLivroAlugado, setInfoLivroAlugado] = useState<LivroAlugado[]>([]);

    function handleOpenModalInfoLivroAlugado(livro: LivroAlugado){
        const infoLivroAlugado = livrosAlugados.filter(livroAlugado => livroAlugado.id === livro.id)
        setInfoLivroAlugado(infoLivroAlugado);

        setModalInfoLivroAlugado(true);
    }

    function handleCloseModalInfoLivroAlugado(){
        setModalInfoLivroAlugado(false);
    }

    function handleDevolveLivro(item: Livro){
        devolveLivroAlugado({
            id: item.id,
            titulo: item.titulo,
            autor: item.autor,
            genero: item.genero,
            resumo: item.resumo
        })
    }

    return(
        <>
        <ModalInfoLivroAlugado 
            isOpen={modalInfoLivroAlugado} 
            onRequestClose={handleCloseModalInfoLivroAlugado}
            infoLivroAlugado={infoLivroAlugado}/>

        {livros.length ? 
        <table className="tabelaAlugados">
            <thead>
                <tr>
                    <th> Título </th>
                    <th> Locatário </th>
                    <th> Data </th>
                </tr>
            </thead>

            <tbody>
                {livros.map(livro => {
                    return(
                        <tr key={livro.id}>
                            <td className="tabelaTdAlugados"> {livro.titulo} </td>
                            <td className="tabelaTdAlugados"> {livro.locatario} </td>
                            <td className="tabelaTdAlugados"> 
                                {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(livro.dataAlugado))} 
                            </td>
                            <td className="tabelaTdAlugados"> 
                                <div className="botaoTabela">
                                    <button className="botaoDevolver" onClick={() => handleDevolveLivro(livro)}> {<FaLevelUpAlt />} </button>
                                    <button className="botaoDevolver" onClick={() => handleOpenModalInfoLivroAlugado(livro)}> {<FaInfoCircle />} </button>
                                </div> 
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        : 
        <h1 className="validacaoPesquisa"> Nenhum livro alugado encontrado </h1>
        }
        </>
    );
}