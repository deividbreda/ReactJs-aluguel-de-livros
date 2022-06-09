import { useState } from 'react';
import { LivroList } from './components/LivroList';
import { ModalLivroAdd } from './components/ModalLivroAdd';
import { useLivro } from './hooks/useLivros';
import './styles/global.scss';

export function App(){
    const { validacaoLivroCadastro } = useLivro();

    const [novoModalAdd, setNovoModalAdd] = useState(false);
    const [showValidacao, setShowValidacao] = useState(false);

    function handleOpenModalAdd(){
        setNovoModalAdd(true); 
        validacaoLivroCadastro(showValidacao)
    }

    function handleFechaModalAdd(){
        setNovoModalAdd(false);
        validacaoLivroCadastro(showValidacao)
    }

    return(
        <>
            <LivroList abrirModalAddLivro={handleOpenModalAdd} />
            <ModalLivroAdd isOpen={novoModalAdd} onRequestClose={handleFechaModalAdd} />
        </>
    ); 
}