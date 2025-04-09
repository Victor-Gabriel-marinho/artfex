import { createClient } from "@supabase/supabase-js";

// Rota para buscar dados da tabela "usuarios"
export const pegar_dados = async (_, res) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    try {
      const { data, error } = await supabase.from("usuarios").select("*");
  
      if (error) throw error;
  
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Rota para criar um novo usuário

export const criar_usuario = async (req, res) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const { nome, email, senha, cidade, estado } = req.body;

  try {
    const { data, error } = await supabase.from("usuarios").insert([{ nome, email, senha, cidade, estado }]);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Rota para deletar um usuário

export const deletar_usuaria = async(req, res) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const { nome, email, senha, cidade, estado } = req.body;

  try{
    const {data, error} = await supabase.from("usuarios").delete().eq("id", id)
    if (error) throw error
    res.json(data)
  } catch (error){
    res.status(500).json({ error : error.message})
  }
}