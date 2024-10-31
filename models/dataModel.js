// export const fetchData = async() => {
//     const response = await fetch('https://coffee-recipes.onrender.com/');
//     if (!response.ok) {
//         throw new Error('Falha ao buscar dados da API');
//     }
//     let data = await response.json();

//     data = data[0]
//     console.log(data);
//     return data;
// };

import fs from 'fs';

export const fetchData = async() => {
    const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
    return data;
};

//console.log(await fetchData())