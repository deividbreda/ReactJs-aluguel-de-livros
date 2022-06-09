import ReactDOM from 'react-dom/client';
import { App } from './App'
import { LivroProvider } from './hooks/useLivros';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(
    <LivroProvider>
        <App />
    </LivroProvider>   
);