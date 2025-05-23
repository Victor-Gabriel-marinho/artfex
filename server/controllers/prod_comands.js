import { createClient } from "@supabase/supabase-js"

//controller para pegar imagens
export const get_produtos = async (_,res) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    const {data,error} = await supabase.from('produtos').select('*')

    if (error){
        return res.status(500).json({error: error.mensage})
    }

    res.json(data)
}

export const get_ususer = async (req,res) => {
    console.log(req.params)
}