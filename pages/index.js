import React from 'react';
import RoadmapFlow from '../components/RoadmapFlow'; // Importa o componente que criamos

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center">
      <header className="w-full bg-slate-100 text-white pt-[50px] pb-[10px] text-center">
        <h1 className="text-3xl text-slate-800">Olá, eu sou a <span className="text-slate-900 font-bold">Rebeca</span>!</h1>
      </header>

      <main className="w-full flex flex-col items-center py-5">
        <div className="flex flex-row items-center">
          <div className="max-w-4xl bg-white p-6 rounded-lg shadow-md border-[2px] border-slate-900">
            <h2 className="font-semibold text-slate-900">Vamos nos conhecer melhor...</h2>
          {/* <RoadmapFlow /> O roadmap interativo */}
          </div>
          <div className="p-1">
            <button class="bg-white text-slate-900 rounded-full w-7 h-7 hover:bg-slate-100 hover:font-bold border-[2px] border-slate-900">+</button>
          </div>
        </div>
      </main>
    </div>
  );
}
