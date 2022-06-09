import { useState } from "react";
import Modal from "react-modal";
import { useLivro } from "../hooks/useLivros";
import { FaExclamationTriangle } from "react-icons/fa";
import closeImg from '../images/close.svg'

interface ModalLivroAddProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalLivroAdd({ isOpen, onRequestClose }: ModalLivroAddProps){
    const { addLivro, validacaoLivroCadastro, validaCadastro } = useLivro();

    const [id, setId] = useState(1);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [resumo, setResumo] = useState('');
    const [genero, setGenero] = useState('');

    const [showValidacao, setShowValidacao] = useState(false);


    function handleAddNovoLivro(){
        if(titulo.length <= 0 || autor.length <= 0 || resumo.length <= 0 || genero.length <= 0){ 
            setShowValidacao(true)
            validacaoLivroCadastro(showValidacao);

        } else {
         
            setId(id + 1);
    
            addLivro({
                id,
                titulo,
                autor,
                genero,
                resumo,
            })

            onRequestClose();
        }
    
        setTitulo('');
        setAutor('');
        setGenero('');
        setResumo('');
    }

    return(
        <Modal isOpen={isOpen} ariaHideApp={false}
            onRequestClose={onRequestClose}
            overlayClassName="reactModalOverlay"
            className="reactModalContent">

            <button type="button" onClick={onRequestClose} 
                className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> 
            </button>

                <h1 className="tituloModalAdd"> Cadastro de Livros </h1>

                { validaCadastro ? 
                <h1 className="validaCadastro"> <i className="validaIcon">{<FaExclamationTriangle />}</i> Preencha os campos corretamente! </h1> 
                : 
                null 
                }

                <h1 className="tituloCadastroInputs"> Titúlo </h1>
                <input type="text" className="inputCadastro" placeholder="Titúlo do Livro..." 
                value={titulo} onChange={(e)=>setTitulo(e.target.value)} />

                <h1 className="tituloCadastroInputs"> Autor </h1>
                <input type="text" className="inputCadastro" placeholder="Autor do Livro..." 
                value={autor} onChange={(e)=>setAutor(e.target.value)} />

                <h1 className="tituloCadastroInputs"> Gênero </h1>
                <input type="text" className="inputCadastro" placeholder="Gênero do Livro..." 
                value={genero} onChange={(e)=>setGenero(e.target.value)} />

                <h1 className="tituloCadastroInputs"> Resumo </h1>
                <textarea className="inputCadastro inputTextArea" placeholder="Resumo" 
                value={resumo} onChange={(e)=>setResumo(e.target.value)} />

                <input type="button" className="botaoAddNovoLivro" value="ADICIONAR" onClick={handleAddNovoLivro} />
        </Modal>
    );
}