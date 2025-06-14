// Importando Supabase
import { supabase } from "../routers/client.js";

// Controller para pegar os produtos
export const get_produtos = async (req,res) => {
    
    const user_id = req.params.id

    const {data,error} = await supabase.from('produtos').select('*').neq("id_usuario", user_id)

    if (error){
        return res.status(500).json({error: error.mensage})
    }

    res.json(data)
};

// Controller para pegar o vendendor
export const get_user = async (req,res) => {
    const id = req.params.id;
    
    const {data,error} = await supabase.from('usuarios').select('*').eq('id', id).single()
    
    if (error) {
        return res.status(500).json({error: error.message})
    }

    res.json(data)
};

//  Controller para adicionar um item no carrinho
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

// Controller para pegar o carrinho do usuário
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

// Controller para deletar um item
export const delet_item = async (req,res) => {
    const user_id = req.params.user_id
    const product_id = req.params.product_id

    const {data, error} = await supabase .from('carrinho').delete().eq('user_id', user_id).eq("product_id", product_id)

    if (error) {
        console.log("erro ao deletar item", error)
    }

    res.json(data)
}