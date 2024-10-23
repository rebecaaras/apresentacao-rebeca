import { dataController } from "@/controllers/dataController";

export default async function handler(req,res){
    return dataController(req, res);
}