import { supabase } from "../routers/client.js";

//controller para pegar imagens
export const get_produtos = async (_,res) => {

    const {data,error} = await supabase.from('produtos').select('*')

    if (error){
        return res.status(500).json({error: error.mensage})
    }

    res.json(data)
};

export const get_ususer = async (req,res) => {
    const id = req.params.id;
    
    const {data,error} = await supabase.from('usuarios').select('*').eq('id', id).single()
    
    if (error) {
        return res.status(500).json({error: error.message})
    }

    res.json(data)
};

export const add_cart = async (req, res) => {
    const user_id = req.params.id_user;
    const product_id = req.params.id_product;

    const { data, error } = await supabase
        .from('carrinho')
        .insert([{ user_id: user_id, product_id: product_id }])
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
    
};

export const get_cart = async (req, res) => {
    const user_id = req.params.id_user;


    const {data, error} = await supabase
        .from('carrinho')
        .select('*')
        .eq('user_id', user_id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    const productIds = data.map(item => item.product_id);

    const {data:prodcts, error:reqerror} = await supabase
        .from('produtos')
        .select("*")
        .in('id', productIds);
    if (reqerror) {
        return res.status(500).json({ error: reqerror.message });
    }

    res.json(prodcts);    
};