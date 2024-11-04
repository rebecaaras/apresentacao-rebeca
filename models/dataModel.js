export const fetchData = async() => {
    //const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));
    const response = await fetch('https://coffee-recipes.onrender.com/');
    if (!response.ok) {
        throw new Error('Falha ao buscar dados da API');
    }
    let data = await response.json();
    return data;
};