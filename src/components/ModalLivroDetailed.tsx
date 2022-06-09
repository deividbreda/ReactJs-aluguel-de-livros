import Modal from "react-modal";
import { Livro } from "../hooks/useLivros";
import closeImg from '../images/close.svg'

interface LivroDetailedProps {
    isOpen: boolean;
    onRequestClose: () => void;
    item: Livro[]
}

export function ModalLivroDetailed({ isOpen, onRequestClose, item }: LivroDetailedProps){

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}
        overlayClassName="reactModalOverlay" className="reactModalContent">

            <button type="button" onClick={onRequestClose} 
                className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> 
            </button>

            <h1 className="tituloModalView"> Detalhes do Livro </h1>
            {item.map(livro => (
                <div key={livro.id}>
                    <h1 className="tituloCadastroInputs livroInfo"> Titúlo </h1>
                    <h2 className="descLivro"> {livro.titulo} </h2>

                    <h1 className="tituloCadastroInputs livroInfo"> Autor </h1>
                    <h2 className="descLivro"> {livro.autor} </h2>

                    <h1 className="tituloCadastroInputs livroInfo"> Gênero </h1>
                    <h2 className="descLivro"> {livro.genero} </h2>

                    <h1 className="tituloCadastroInputs livroInfo"> Resumo </h1>
                    <h2 className="descLivro"> {livro.resumo} </h2>
                </div>
            ))}
        </Modal>
    );
}