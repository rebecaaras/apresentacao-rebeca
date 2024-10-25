import React from 'react';
import RoadmapFlow from '../components/RoadmapFlow'; // Importa o componente que criamos
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        setError(error.message);
        console.log(error.message)
      }
    };

    fetchData();
  }, []);

  // if (error) return <div>{`Erro: ${error}`}</div>;
  // if (!data) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-between">
      <nav className="text-orange-950 p-4">
        <ul className="flex flex-row">
          <li className="bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Clássicos</li>
          <li className="bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Especiais</li>
          <li className="bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Gourmet</li>
        </ul>
      </nav>

      <main className="w-full flex flex-col items-center">
        <header className="w-full bg-slate-100 text-white text-center pb-[15px]">
          <h1 className="font-[Roboto] text-[26px] text-orange-950">Descubra uma receita de café deliciosa:</h1>
        </header>
        <div className="flex flex-col items-center">
          <div className="max-w-4x1 bg-white p-4 rounded-lg shadow-md border-[2px] border-orange-950 border-opacity-80 mb-[15px]">
            <h2 className= "font-[Roboto] text-orange-950">hey</h2>
          {/* <RoadmapFlow /> O roadmap interativo */}
          </div>
          <div className="p-1">
            <button className="bg-orange-950 bg-opacity-80 text-white font-[Roboto] rounded-[10px] p-2 h-12 w-30 hover:bg-orange-950 hover:bg-opacity-100 hover:font-bold border-[1px]">Nova receita</button>
          </div>
        </div>
      </main>
      <footer className="bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10 p-[15px] mb-[15px]">Visite a página do GitHub!</footer>

      {/* Incluir documentação do projeto.  */}
      {/* <footer className="text-slate-400 justify-center">
        Leia aqui documentação do projeto
      </footer> */}
    </div>
  );
}
