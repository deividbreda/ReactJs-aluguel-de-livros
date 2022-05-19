import { useState, useEffect } from 'react';
import { FaTrashAlt, FaChevronDown, FaCheckCircle } from "react-icons/fa";

import logo from '../images/logo.png';

interface Item {
    id: number,
    titulo: string,
    autor: string,
}

export function LivroList(){
    const [itens, setItens] = useState<Item[]>([]);
    const [itensAlugados, setItensAlugados] = useState<Item[]>([]);
    const [idItem, setIdItem] = useState(1);
    const [newNome, setNewNome] = useState('');
    const [newAutor, setNewAutor] = useState('');

    function inserirItem(){
        if(newNome == ''){
            alert("Insira um nome");
        } else if(newAutor == ''){
            alert("Insira um preço");
        } else {
            setIdItem(idItem + 1);

            const novoItem = {
                id: idItem,
                titulo: newNome,
                autor: newAutor,
            }

            setItens(oldState => [...oldState, novoItem]);
            setNewNome('');
            setNewAutor('');
        }
    }

    function removeLivro(id: number){
        const removeLivros = itens.filter(item => item.id !== id);
        setItens(removeLivros);
    }

    function alugaLivro(item){
        const removeLivros = itens.filter(itemAlugados => itemAlugados.id !== item.id);
        setItens(removeLivros);
        const novoItem = {
            id: item.id,
            titulo: item.titulo,
            autor: item.autor,
        }
        setItensAlugados(oldState => [...oldState, novoItem]);
    }

    return(
        <>
        <div id="livro">
            <div className="containerHome">
                <div className="allConteudoLivro">
                    <div className="col">
                        <div className="flexCentralizado containerFlexCentralizado">
                            <img src={logo} alt="" className="logoLivros" />
                        </div>
                        
                        <div className="allConteudoInputsLivro">
                            <h1 className="tituloCadastro"> Cadastro </h1>
                            <div className="col">
                                <div className="allConteudoInputs">
                                    <div className="col col-2-input">
                                        <div className="itemInputLivro">
                                            <h1 className="tituloCadastroInputs"> Titúlo: </h1>
                                            <input className="inputCadastro" placeholder="Titúlo do Livro..." type="text" value={newNome} onChange={(e)=>setNewNome(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="col col-2-input">
                                        <div className="itemInputLivro">
                                            <h1 className="tituloCadastroInputs"> Autor: </h1>
                                            <input className="inputCadastro" placeholder="Autor do Livro..." type="text" value={newAutor} onChange={(e)=>setNewAutor(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="col col-2-button">
                                        <div className="itemInputLivroButton">
                                            <input className="inputCadastroButton" type="button" value="Inserir" onClick={inserirItem}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    
                            <h1 className="tituloCadastro"> Banco de Livros </h1>
                            <div className="allConteudoItemLivro">
                            {itens.map(item => (                               
                                <div key={item.id} className="col col-3">   
                                    <div className="allItemConteudoLivro">                                   
                                        <h1 className="tituloItemLivro"> {item.titulo} </h1>
                                        <p className="autorItemLivro"> {item.autor} </p>

                                        <div className="col">
                                            <div className="allConteudoItemInputButton">
                                                <div className="col col-2">
                                                    <div className="itemConteudoInputButton">
                                                        <button className="buttonRemoveItemLivro" onClick={()=> removeLivro(item.id)}> {<FaTrashAlt />} Remover </button>
                                                       
                                                    </div>
                                                </div>

                                                <div className="col col-2">
                                                    <div className="itemConteudoInputButton">
                                                    <button className="buttonAlugaItemLivro" onClick={()=> alugaLivro(item)}> {<FaChevronDown />} Alugar </button>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>                                                                          
                            ))}
                            </div>

                            <h1 className="tituloCadastro"> Alugados </h1>
                            <div className="allConteudoItemLivro">
                                {itensAlugados.map(item => (
                                    <div key={item.id} className="col col-3">
                                        <div className="allItemConteudoLivroAlugado">   
                                            <div className="alugadoCheck">
                                                <p className="alugaItemAutorAlugadoIcon"> <FaCheckCircle /> </p>
                                                <p className="alugaItemAutorAlugado"> Alugado </p>           
                                            </div>                     
                                            <h1 className="tituloItemLivroAlugado"> {item.titulo} </h1>
                                            <p className="tituloItemAutorAlugado"> {item.autor} </p>  
                                        </div>                                 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}