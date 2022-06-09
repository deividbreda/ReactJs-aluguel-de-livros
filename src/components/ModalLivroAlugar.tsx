import Modal from "react-modal";
import { Livro, useLivro } from "../hooks/useLivros";
import { useState } from "react";
import InputMask from "react-input-mask";
import closeImg from '../images/close.svg'

interface ModalLivroAlugarProps {
    isOpen: boolean,
    onRequestClose: () => void,
    item: Livro[]
}

export function ModalLivroAlugar({ isOpen, onRequestClose, item }: ModalLivroAlugarProps){
    const { alugaLivro } = useLivro();
    
    const [locatario, setLocatario] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');

    function handleAlugaLivro(item: Livro){
        alugaLivro({
            id: item.id,
            titulo: item.titulo,
            autor: item.autor,
            genero: item.genero,
            resumo: item.resumo,
            locatario,
            celular,
            cpf,   
        })
        setLocatario('');
        setCelular('');
        setCpf('');
        onRequestClose();
    }

    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}
        overlayClassName="reactModalOverlay" className="reactModalContent">

        <button type="button" onClick={onRequestClose} 
            className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> 
        </button>

            {item.map(livro => {
                return(
                    <div key={livro.id}>
                        <h1 className="tituloModalAluga"> Aluguel de Livros </h1>
                        <h3 className="infoLivro"> Título: {livro.titulo} </h3>
                        <h3 className="infoLivro"> Autor: {livro.autor} </h3>

                        <h1 className="tituloCadastroInputs"> Locatário </h1>
                        <input type="text" className="inputCadastro" placeholder="Nome do locatário..." 
                        value={locatario} onChange={(e)=>setLocatario(e.target.value)} />

                        <h1 className="tituloCadastroInputs"> Celular </h1>
                        <InputMask mask="(99) 99999-9999" className="inputCadastro" placeholder="Número do locatário..." 
                        value={celular} onChange={(e)=>setCelular(e.target.value)} />

                        <h1 className="tituloCadastroInputs"> CPF </h1>
                        <InputMask mask="999.999.999-99" className="inputCadastro" placeholder="CPF do locatário..." 
                        value={cpf} onChange={(e)=>setCpf(e.target.value)} />
                        
                        <input className="botaoAlugaLivro" type="button" value="ALUGAR" onClick={() => handleAlugaLivro(livro)}/>
                    </div>
                );
            })}
        </Modal>
    );
}