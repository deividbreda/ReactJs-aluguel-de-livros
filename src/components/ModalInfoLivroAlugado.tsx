import Modal from "react-modal";
import { LivroAlugado } from "../hooks/useLivros";
import closeImg from '../images/close.svg'

interface ModalInfoLivroAlugadoProps {
    isOpen: boolean,
    onRequestClose: () => void,
    infoLivroAlugado: LivroAlugado[]
}

export function ModalInfoLivroAlugado({ isOpen, onRequestClose, infoLivroAlugado  }: ModalInfoLivroAlugadoProps){
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}
        overlayClassName="reactModalOverlay" className="reactModalContent">

            <button type="button" onClick={onRequestClose} 
                className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> 
            </button>

            <h1 className="tituloModalInfoLivroAlugado"> Informações do Aluguel </h1>
            {infoLivroAlugado.map(livro => {
                return(
                    <div key={livro.id}>
                        <h1 className="tituloCadastroInputs livroInfo"> Livro </h1>
                        <h1 className="descLivro"> {livro.titulo} </h1>

                        <h1 className="tituloCadastroInputs livroInfo"> Data </h1>
                        <h1 className="descLivro"> 
                            {new Intl.DateTimeFormat('pt-BR').format(
                            new Date(livro.dataAlugado))}  
                        </h1>

                        <h1 className="tituloCadastroInputs livroInfo"> Locatário </h1>
                        <h1 className="descLivro"> {livro.locatario} </h1>

                        <h1 className="tituloCadastroInputs livroInfo"> Celular </h1>
                        <h1 className="descLivro"> {livro.celular} </h1>

                        <h1 className="tituloCadastroInputs livroInfo"> CPF </h1>
                        <h1 className="descLivro"> {livro.cpf} </h1>
                    </div>                
                );
            })}
        </Modal>
    );
}