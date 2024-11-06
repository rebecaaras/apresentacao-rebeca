import { getDataSpecial } from "@/services/dataServiceSpecial";

export const dataControllerSpecial = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const data = await getDataSpecial();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({message: 'Erro ao buscar dados'});
        }
    }
};