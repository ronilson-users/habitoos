import Image from 'next/image';
import styles from './page.module.css';

import Header from './components/Header/Header'; // Importe o Header aqu

import Test from './components/test';

export default function Home() {
  return (
 <div>
<Header />{/*
Use o componente Header aqui */}
    
    <Test />
    
      <main>
        {/* Conteúdo da sua página */}
      </main>
      {/* Footer e outras partes da página */}
    </div>
   
   
   
   
   
  )
}
