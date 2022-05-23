import { FaTimes } from "react-icons/fa";
import { Livro } from "./LivroList";

interface LivroCadastroProps {
    cadastra(): void,
    titulo: string,
    novoTitulo: any,
    novoAutor: any,
    autor: string,
    valida: boolean
}

export function LivroCadastro(props: LivroCadastroProps){
    return(
        <>
        {props.valida && (     
            <h1 className="validaInput"> <FaTimes/> Preencha os campos titúlo e autor corretamente! </h1>    
        )}

        <div className="col">
            <div className="allConteudoInputs">
                <div className="col col-2-input">
                    <div className="itemInputLivro">
                        <h1 className="tituloCadastroInputs"> Titúlo: </h1>
                            <input className={props.valida ? "inputCadastroError" : "inputCadastro" } 
                            placeholder="Titúlo do Livro..." type="text" value={props.titulo} 
                            onChange={(e)=>props.novoTitulo(e.target.value)} />                           
                    </div>
                </div>

                <div className="col col-2-input">
                    <div className="itemInputLivro">
                        <h1 className="tituloCadastroInputs"> Autor: </h1>
                        <input className={props.valida ? "inputCadastroError" : "inputCadastro" } 
                        placeholder="Autor do Livro..." type="text" value={props.autor} 
                        onChange={(e)=>props.novoAutor(e.target.value)} />             
                    </div>
                </div>

                <div className="col col-2-button">
                    <div className="itemInputLivroButton">
                        <input className="inputCadastroButton" type="button" value="Adicionar livro"
                        onClick={props.cadastra}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}