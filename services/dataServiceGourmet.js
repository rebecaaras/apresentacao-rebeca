import { fetchDataGourmet } from "@/models/dataModelGourmet";

export const getDataGourmet = async () => {
    try {
        const data = await fetchDataGourmet();
        return data;
    } catch (error) {
        console.log('Erro no serviço de dados:', error);
        throw new Error('Erro ao processar dados');
    }
};