import Navbar from '@/components/nav-bar';
import NewRecipe from '@/components/new-recipe';
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          //throw new Error('Erro ao buscar dados');
          return <div>Carregando dados...</div>
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

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-between">
      <Navbar></Navbar>
      <NewRecipe></NewRecipe>
    </div>
  );
}
