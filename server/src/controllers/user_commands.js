import { supabase } from "../routers/client.js";

// Controller para buscar dados da tabela "usuarios"
export const pegar_dados = async (_, res) => {
    try {
      const { data, error } = await supabase.from("usuarios").select("*");
  
      if (error) throw error;
  
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Controller para criar um novo usuário
export const criar_usuario = async (req, res) => {
  const user = {
    "nome": req.body.name,
    "email": req.body.email,
    "senha": req.body.password,
    "cidade": req.body.cidade,
    "estado": req.body.estado
  };
  if (user){
    res.json(user)
  }
  try {
    // 1. Cadastrar no Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: user.email,
      password: user.senha
    });
    
    // Verifica se houve erro no cadastro
    if (signUpError || !data.user) {
      console.error("Erro no signUp:", signUpError?.message);
      return res.status(400).json({ error: signUpError?.message || "Erro ao cadastrar" });
    }

    const userId = data.user.id;

    // 2. Inserir na tabela personalizada
    const { error: insertError } = await supabase.from("usuarios").insert({
      id: userId,
      nome: user.nome,
      senha: user.senha,
      email: user.email,
      cidade: user.cidade,
      estado: user.estado
    });

    if (insertError) {
      console.error("Erro ao inserir na tabela personalizada:", insertError.message);
      return res.status(400).json({ error: insertError.message });
    }

    return res.status(200).json({ message: "Usuário criado. Verifique seu email para ativar a conta." });

  } catch (err) {
    console.error("Erro inesperado:", err);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Controller para deletar um usuário

export const deletar_usuario = async(req, res) => {
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

    
    return res.status(200).json({ message: "Login realizado com sucesso", session: data.session, user: data.user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
    
  }
};

export const logout_user = async (req,res) => {
  const {error} = await supabase.auth.signOut(req.body.acess_token)

  if (error) throw error

  res.status(200).json({ message: 'Logout realizado com sucesso!' });
  
}