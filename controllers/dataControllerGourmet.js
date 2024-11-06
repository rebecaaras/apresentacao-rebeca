import { getDataGourmet } from "@/services/dataServiceGourmet";

export const dataControllerGourmet = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const data = await getDataGourmet();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({message: 'Erro ao buscar dados'});
        }
    }
};