import Navbar from '@/components/nav-bar';
import NewRecipe from '@/components/new-recipe';
import PageFooter from '@/components/page-footer';
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
          return <div>Carregando dados...</div>
        }
        const result = await response.json();
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
      <PageFooter></PageFooter>
    </div>
  );
}
