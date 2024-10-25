export const fetchData = async() => {
    const response = await fetch('https://coffee-recipes.onrender.com/classic');
    if (!response.ok) {
        throw new Error('Falha ao buscar dados da API');
    }
    let data = await response.json();

    data = data[0]
    return data;
};