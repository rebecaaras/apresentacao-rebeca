"use client";

import React from "react";
import { useEffect, useState } from 'react';

const defaultRecipe = {
    "nome": "Flat White",
    "ingredientes": [
      "leite vaporizado",
      "café expresso"
    ],
    "instrucoes": "Prepare um expresso e adicione leite vaporizado, visando uma proporção maior de café na mistura."
  }
const NewClassicRecipe = () => {
    const [data, setData] = useState([defaultRecipe]);
    const [recipe, setRecipe] = useState(defaultRecipe);

    const getAllRecipes = async() => {
        fetch('/api/classic')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data'))
      };

    useEffect(() => {
        getAllRecipes();
    }, []);

    async function sortRecipe(){
        let index = Math.floor(Math.random() * data.length);
        setRecipe(data[index])
        console.log('Recipe:', recipe)
        console.log('Index:',index)
        console.log('data[index]:', data[index])
    }

    useEffect(() => {
        if (data){
            sortRecipe();
            console.log('Segundo useEffect executado!');
        }
    }, [data]);

    if (!data) {
        return (<div className="w-full flex flex-col items-center">
                <h1 className= "h-[350px] font-[Roboto] text-orange-950 flex-start items-center text-[22px]">Carregando...</h1>
            </div>
    )
    }
    return(
        <>
        <main className="w-full flex flex-col items-center">
            <header className="w-full bg-slate-100 text-white text-center pb-[15px]">
            <h1 className="font-[Roboto] text-[26px] text-orange-950">Descubra uma receita clássica:</h1>
            </header>
            <div className="flex flex-col items-center m-[15px]">
            <div className="max-w-4x1 bg-white p-4 rounded-lg shadow-md border-[2px] border-orange-950 border-opacity-80 mb-[15px]">
                <h2 className= "font-[Roboto] text-orange-950 text-[22px] font-semibold">
                    {recipe.nome}
                </h2>
                <ul className= "font-[Roboto] text-orange-950 flex flex-row">
                    <span className= "font-[Roboto] text-orange-950 font-semibold">Ingredientes:</span>
                    {recipe.ingredientes.map(ingrediente =>(
                        <li>&nbsp;{ingrediente},</li>
                    ))}
                </ul>
                <p className= "font-[Roboto] text-orange-950">
                <span className= "font-[Roboto] text-orange-950 font-semibold">Instruções:&nbsp;</span>
                    {recipe.instrucoes}
                </p>
            </div>
            <div className="p-1">
                <button onClick={getAllRecipes} className="bg-orange-950 bg-opacity-80 text-white font-[Roboto] rounded-[10px] p-2 h-12 w-30 hover:bg-orange-950 hover:bg-opacity-100 hover:font-bold border-[1px]">
                    Nova receita
                </button>
            </div>
            </div>
        </main>
        </>
    )
}

export default NewClassicRecipe;
    
