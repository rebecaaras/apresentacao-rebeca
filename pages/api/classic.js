import { dataControllerClassic } from "@/controllers/dataControllerClassic";

export default async function handler(req,res){
    return dataControllerClassic(req, res);
}