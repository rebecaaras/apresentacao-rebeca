import { getData } from "@/services/dataService";

export const dataController = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const data = await getData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({message: 'Erro ao buscar dados'});
        }
    }
};