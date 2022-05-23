import { FaTrashAlt, FaChevronDown } from "react-icons/fa";
import { Livro } from "./LivroList";

interface LivroListProps {
    item: Livro,
    remove(id: number): void,
    aluga(item: Livro): void
}

export function Livros(props: LivroListProps){
    return(                                      
        <div key={props.item.id} className="col col-3">   
            <div className="allItemConteudoLivro">                                   
                <h1 className="tituloItemLivro"> {props.item.titulo} </h1>
                <p className="autorItemLivro"> {props.item.autor} </p>

                <div className="col">
                    <div className="allConteudoItemInputButton">
                        <div className="col col-2">
                            <div className="itemConteudoInputButton">
                                <button className="buttonRemoveItemLivro" onClick={() => props.remove(props.item.id)}> {<FaTrashAlt />} Remover </button>                                                      
                            </div>
                        </div>

                        <div className="col col-2">
                            <div className="itemConteudoInputButton">
                                <button className="buttonAlugaItemLivro" onClick={()=> props.aluga(props.item)}> {<FaChevronDown />} Alugar </button>                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>                                                                          
    );
}