import { Livro } from "./LivroList";
import { FaCheckCircle } from "react-icons/fa";

interface LivroAlugadoListProps {
    item: Livro
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
            </div>                                 
        </div>
    );
}