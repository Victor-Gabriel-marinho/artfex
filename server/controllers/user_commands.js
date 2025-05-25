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
  }

  try {
    const {data, error} = await supabase.auth.signUp(
      {
        email: user.email,
        password: user.senha,
        options:{
          nome: user.nome
        },
        
      })

      if (error) {
          console.error("Erro ao criar usuário:", error.message);
          return res.status(400).json({ error: error.message });
        }

        console.log("Usuário criado com sucesso, verifique o email!");
        return res.status(200).json({ message: "Usuário criado. Verifique seu email para ativar a conta." });

  } catch (err) {
    console.error("Erro inesperado:", err);
    return res.status(500).json({ error: "Erro interno do servidor" });
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
  const user = {
    "email": req.body.email,
    "senha": req.body.password,
  }
  try {
      const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.senha
})
    if(error) throw error
    console.log(data)
    
    return res.status(200).json({ message: "Login realizado com sucesso", session: data.session, user: data.user });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

