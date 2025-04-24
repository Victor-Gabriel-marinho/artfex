import { createClient } from "@supabase/supabase-js"

//controller para pegar imagens
export const get_images = async (_,res) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    const {data,error} = await supabase.from('images').select('*')

    if (error) {
        return res.status(500).json({error: error.message})
    }
    
    res.json(data);
}