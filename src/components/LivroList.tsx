import { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { LivroCadastro } from './LivroCadastro';
import { Livros } from './Livros';
import { LivrosAlugados } from './LivrosAlugados';

export interface Livro {
    id: number,
    titulo: string,
    autor: string,
}

export function LivroList(){
    const [itens, setItens] = useState<Livro[]>([]);
    const [itensAlugados, setItensAlugados] = useState<Livro[]>([]);
    const [idItem, setIdItem] = useState(1);
    const [newNome, setNewNome] = useState('');
    const [newAutor, setNewAutor] = useState('');
    const [showValidacao, setShowValidacao] = useState(false);
    const [pesquisa, setPesquisa] = useState('');

    const lowerPesquisa = pesquisa.toLowerCase();
    const filtroLivros = itens.filter((livro) => livro.titulo.toLowerCase().includes(lowerPesquisa))
    const filtroLivrosAlugados = itensAlugados.filter((livro) => livro.titulo.toLowerCase().includes(lowerPesquisa))

    function inserirItem(){
        if(newNome.length <= 0){ 
            setShowValidacao(true);
    
        } else if(newAutor.length <= 0){
            setShowValidacao(true);
    
        } else {
            setShowValidacao(false);
            setIdItem(idItem + 1);
    
            const novoItem = {
                id: idItem,
                titulo: newNome,
                autor: newAutor,
            }
    
            setItens(oldState => [...oldState, novoItem]);
        }
    
        setNewNome('');
        setNewAutor('');
    }

    function removeLivro(id: number){
        const removeLivros = itens.filter(item => item.id !== id);
        setItens(removeLivros);
    }

    function alugaLivro(item: Livro){
        const removeLivros = itens.filter(itemAlugados => itemAlugados.id !== item.id);
        setItens(removeLivros);
        
        const novoItem = {
            id: item.id,
            titulo: item.titulo,
            autor: item.autor,
        }
        setItensAlugados(oldState => [...oldState, novoItem]);
    }

    function devolveLivro(item: Livro){
        const removeLivros = itensAlugados.filter(itemAlugados => itemAlugados.id !== item.id);
        setItensAlugados(removeLivros);

        const novoItem = {
            id: item.id,
            titulo: item.titulo,
            autor: item.autor,
        }

        setItens(oldState => [...oldState, novoItem]);
    }
    
    return(
        <div id="livro">
            <div className="containerHome">
                <div className="allConteudoLivro">
                    <div className="col">
                        <div className="flexCentralizado containerFlexCentralizado">
                            <img src={logo} alt="" className="logoLivros" />
                        </div>
                        
                        <div className="allConteudoInputsLivro">
                            <h1 className="tituloCadastro"> Cadastro </h1>

                            <LivroCadastro 
                                cadastra={inserirItem} 
                                titulo={newNome}
                                novoTitulo={setNewNome}
                                autor={newAutor}
                                novoAutor={setNewAutor}
                                valida={showValidacao}
                            />   
       
                            <div className="flexCentralizado containerFlexCentralizado">
                                <input className="inputPesquisa" value={pesquisa} placeholder="Procurar um livro..." onChange={(e)=>setPesquisa(e.target.value)} />
                            </div>
                    
                            <h1 className="tituloCadastro"> Banco de Livros </h1>
                            <div className="allConteudoItemLivro">    
                                {itens.length ? (
                                    null
                                ) : <h1 className="validacaoBanco"> Cadastre um novo livro... </h1>}

                                {filtroLivros.map(item => {
                                    return <Livros key={item.id} item={item} remove={removeLivro} aluga={alugaLivro} /> 
                                })}
                            </div>

                            {itensAlugados.length ? (
                                <h1 className="tituloCadastro"> Alugados </h1>
                            ) : null }
                            
                            <div className="allConteudoItemLivro">
                                {filtroLivrosAlugados.map(item => (
                                    <LivrosAlugados key={item.id} item={item} devolve={devolveLivro}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}