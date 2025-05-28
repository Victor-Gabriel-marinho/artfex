import { createClient } from "@supabase/supabase-js"
import { supabase } from "../routers/client.js";

//controller para pegar imagens
export const get_produtos = async (_,res) => {

    const {data,error} = await supabase.from('produtos').select('*')

    if (error){
        return res.status(500).json({error: error.mensage})
    }

    res.json(data)
}

export const get_ususer = async (req,res) => {
    const id = req.params.id;
    
    const {data,error} = await supabase.from('usuarios').select('*').eq('id', id).single()
    
    if (error) {
        return res.status(500).json({error: error.message})
    }

    res.json(data)
}