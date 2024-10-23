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
        setData(result.fact);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{`Erro: ${error}`}</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center">
      <header className="w-full bg-slate-100 text-white pb-[10px] text-center">
        <h1 className="text-3xl text-slate-800">Descubra algo novo:</h1>
      </header>

      <main className="w-full flex flex-col items-center py-5">
        <div className="flex flex-col items-center px-[20px]">
          <div className="max-w-4x1 bg-white p-6 rounded-lg shadow-md border-[2px] border-slate-900">
            <h2 className="font-semibold text-slate-900">{data} </h2>
          {/* <RoadmapFlow /> O roadmap interativo */}
          </div>
          <div className="p-1">
            <button class="bg-white text-slate-900 rounded-[10px] p-2 h-12 w-20 hover:bg-slate-100 hover:font-bold border-[1px] border-slate-900">New</button>
          </div>
        </div>
      </main>

      {/* Incluir documentação do projeto.  */}
      {/* <footer className="text-slate-400 justify-center">
        Leia aqui documentação do projeto
      </footer> */}
    </div>
  );
}
