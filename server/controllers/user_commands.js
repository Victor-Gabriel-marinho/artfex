import { createClient } from "@supabase/supabase-js";


// Rota para buscar dados da tabela "usuarios"
export const pegar_dados = async (req, res) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    try {
      const { data, error } = await supabase.from("usuarios").select("*");
  
      if (error) throw error;
  
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};