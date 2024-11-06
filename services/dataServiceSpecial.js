import { fetchDataSpecial } from "@/models/dataModelSpecial";

export const getDataSpecial = async () => {
    try {
        const data = await fetchDataSpecial();
        return data;
    } catch (error) {
        console.log('Erro no serviço de dados:', error);
        throw new Error('Erro ao processar dados');
    }
};