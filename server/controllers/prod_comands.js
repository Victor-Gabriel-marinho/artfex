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

const get_usu_prods = async (_,res, next) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    const {data: id,error} = await supabase.from('produtos').select('id_usuario')

    if (error){
        return res.status(500).json({error: error.mensage})
    }

    res.locals.id = id
    next();
}

export const get_usu = async (_,res)=> {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    const {data,erro} = await supabase.from('usuarios').select('*').eq('id', res.locals.id)
    
    if (erro){
        return res.status(500).json({error: erro.message})
    }

    res.json(data)
}

