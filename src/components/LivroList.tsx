import { useState } from 'react';
import logo from '../images/logo.png';
import { TabelaLivrosAlugados } from './TabelaLivrosAlugados';
import { TabelaLivros } from './TabelaLivros';
import { FaSearch } from "react-icons/fa";
import { useLivro } from '../hooks/useLivros';



interface ModalProps {
    abrirModalAddLivro: () => void,
}

export function LivroList({ abrirModalAddLivro }: ModalProps){
    const { livros, livrosAlugados } = useLivro();

    const [pesquisa, setPesquisa] = useState('');

    const lowerPesquisa = pesquisa.toLowerCase();
    const filtroLivros = livros.filter((livro) => livro.titulo.toLowerCase().includes(lowerPesquisa))
    const filtroLivrosAlugados = livrosAlugados.filter((livro) => livro.titulo.toLowerCase().includes(lowerPesquisa))
    
    return(
        <div id="livro">          
            <div className="containerHome">
                <div className="allConteudoLivro">
                    <div className="col">
                        <div className="flexCentralizado containerFlexCentralizado">
                            <img src={logo} alt="" className="logoLivros" />
                        </div>

                        <div className="allConteudoCabecalho">
                            <div className="col">
                                <div className="col col-2">
                                    <div className="itensPesquisa">
                                        <input className="inputPesquisa" value={pesquisa} placeholder="Procurar um livro..." onChange={(e)=>setPesquisa(e.target.value)} />
                                        <p className="iconePesquisa"> {<FaSearch />}  </p>
                                    </div>
                                </div>

                                <div className="col col-2">
                                    <p className="positionBotaoCadastra"> <a type="submit" className="botaoCadastra" onClick={abrirModalAddLivro}> CADASTRAR LIVRO </a> </p>
                                </div>
                            </div>
                        </div>
       
                        <div className="allConteudoInputsLivro">
                            <h1 className="tituloCadastro"> Banco de Livros </h1>                              
                            <div className="itemConteudoLivro">
                                {livros.length ? (
                                    <TabelaLivros livros={filtroLivros} />
                                ) : <h1 className="validacaoBanco"> Cadastre um novo livro... </h1>}
                            </div>                               
                            
                            {livrosAlugados.length ? (
                                <>
                                <h1 className="tituloCadastro"> Alugados </h1>
                                <div className="itemConteudoLivro">
                                    <TabelaLivrosAlugados livros={filtroLivrosAlugados} />
                                </div>
                                </>
                            ) : null }          
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );
}