import { getDataClassic } from "@/services/dataServiceClassic";

export const dataControllerClassic = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const data = await getDataClassic();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({message: 'Erro ao buscar dados'});
        }
    }
};