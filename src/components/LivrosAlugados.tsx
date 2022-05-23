import { Livro } from "./LivroList";
import { FaCheckCircle } from "react-icons/fa";

interface LivroAlugadoListProps {
    item: Livro,
    devolve(item: Livro): void
}

export function LivrosAlugados(props: LivroAlugadoListProps){
    return(
        <div key={props.item.id} className="col col-3">
            <div className="allItemConteudoLivroAlugado">   
                <div className="alugadoCheck">
                    <p className="alugaItemAutorAlugadoIcon"> <FaCheckCircle /> </p>
                    <p className="alugaItemAutorAlugado"> Alugado </p>           
                </div>                     
                <h1 className="tituloItemLivroAlugado"> {props.item.titulo} </h1>
                <p className="tituloItemAutorAlugado"> {props.item.autor} </p> 
                <div className="itemBotaoDevolver">
                    <input className="botaoDevolver" type="button" value="Devolver" onClick={()=> props.devolve(props.item)}/>
                </div>
            </div>                                 
        </div>
    );
}