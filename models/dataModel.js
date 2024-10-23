export const fetchData = async() => {
    const response = await fetch('https://cnichols1734.pythonanywhere.com/facts/random');
    if (!response.ok) {
        throw new Error('Falha ao buscar dados da API');
    }
    const data = await response.json();
    return data;
};