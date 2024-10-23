import { fetchData } from "@/models/dataModel";

export const getData = async () => {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.log('Erro no serviço de dados:', error);
        throw new Error('Erro ao processar dados');
    }
};