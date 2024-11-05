import Navbar from '@/components/nav-bar';
import NewClassicRecipe from '@/components/new-classic-recipe';
import PageFooter from '@/components/page-footer';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-between">
      <Navbar></Navbar>
      <NewClassicRecipe></NewClassicRecipe>
      <PageFooter></PageFooter>
    </div>
  );
}
