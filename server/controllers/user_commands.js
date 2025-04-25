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
  const user = {
    "nome": req.body.name,
    "email": req.body.email,
    "senha": req.body.password,
    "cidade": req.body.cidade,
    "estado": req.body.estado
  }

  try {
    const { data, error } = await supabase.from("usuarios").insert(user);
    console.log("Usuario cadastrado")
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Rota para deletar um usuário

export const deletar_usuario = async(req, res) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const id = req.body.id

  
  try{
    console.log("Tentando deletar id: ", id)
    const {data, error} = await supabase.from("usuarios").delete().eq("id", id)
    console.log("Usuario deletado")
    if (error) throw error
    res.json(data)
  } catch (error){
    res.status(500).json({ error : error.message})
  }
}

export const login_user = async (req, res) => {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const { email, password } = req.body;
  try {
    // 1. Buscar usuário pelo e-mail
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email)
    if (error || !data) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    if (data.senha !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }
    return res.status(200).json({
      message: 'Login realizado com sucesso',
      usuario: {
        id: data.id,
        email: data.email,
        nome: data.nome,
      }
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

