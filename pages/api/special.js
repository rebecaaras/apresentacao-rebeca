import { dataControllerSpecial } from "@/controllers/dataControllerSpecial";

export default async function handler(req,res){
    return dataControllerSpecial(req, res);
}