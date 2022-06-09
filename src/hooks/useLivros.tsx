import { createContext, ReactNode, useContext, useState } from "react";

export interface Livro {
    id: number
    titulo: string,
    autor: string,
    genero: string,
    resumo: string,
}

export interface LivroAlugado {
    id: number
    titulo: string,
    autor: string,
    genero: string,
    resumo: string,
    locatario: string,
    celular: string,
    cpf: string,
    dataAlugado: Date,
}

interface LivroProviderProps {
    children: ReactNode;
}

type LivroAlugadoInput = Omit<LivroAlugado, 'dataAlugado' >

interface LivroContextData {
    livros: Livro[];
    livrosAlugados: LivroAlugado[];
    addLivro: (item: Livro) => void;
    alugaLivro: (item: LivroAlugadoInput) => void;
    removeLivro: (id: number) => void;
    devolveLivroAlugado(item: Livro): void;
    validacaoLivroCadastro: (showValidacao: boolean) => void;
    validaCadastro: boolean;
}

const LivroContext = createContext<LivroContextData>({} as LivroContextData);

export function LivroProvider({ children }: LivroProviderProps){
    const [livros, setLivros] = useState<Livro[]>([]);
    const [livrosAlugados, setLivrosAlugados] = useState<LivroAlugado[]>([]);
    const [validaCadastro, setValidaCadastro] = useState(false);

    function addLivro(item: Livro){
       const itemLivro = item
       setLivros([...livros, itemLivro]);
    }

    function alugaLivro(itemInput: LivroAlugadoInput){
        const alugaLivro = livros.filter(livros => livros.id !== itemInput.id);
        setLivros(alugaLivro);

        const livroAlugado = {...itemInput, dataAlugado: new Date()};
        setLivrosAlugados([...livrosAlugados, livroAlugado])
    }

    function removeLivro(id: number){
        const removeLivros = livros.filter(item => item.id !== id);
        setLivros(removeLivros);
    }

    function devolveLivroAlugado(item: Livro){
        const devolveLivro = livrosAlugados.filter(livros => livros.id !== item.id);
        setLivrosAlugados(devolveLivro);

        const livroAlugado = item;
        setLivros([...livros, livroAlugado]);
    }

    function validacaoLivroCadastro(showValidacao: boolean){
        setValidaCadastro(showValidacao);
    }

    return(
        <LivroContext.Provider value={{ livros, livrosAlugados, addLivro, alugaLivro, removeLivro, devolveLivroAlugado, validacaoLivroCadastro, validaCadastro }}>
            {children}
        </LivroContext.Provider>
    );
}

export function useLivro(){
    const context = useContext(LivroContext);

    return context;
}