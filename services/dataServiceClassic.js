import { fetchDataClassic } from "@/models/dataModelClassic";

export const getDataClassic = async () => {
    try {
        const data = await fetchDataClassic();
        return data;
    } catch (error) {
        console.log('Erro no serviço de dados:', error);
        throw new Error('Erro ao processar dados');
    }
};