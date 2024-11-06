import { dataControllerGourmet } from "@/controllers/dataControllerGourmet";

export default async function handler(req,res){
    return dataControllerGourmet(req, res);
}