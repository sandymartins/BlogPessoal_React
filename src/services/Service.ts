import axios from 'axios';


//TYPESCRIPT: Síncrono, o que significa que todas às suas funções são lidas uma após à outra.


//Service: Camada responsável por fazer a comunicação direto com o Back-End
//Service faz as requisições pra nossa API

//métodos GET, POST, PUT E DELETE
export const api = axios.create({
    baseURL: 'https://blogpessoal-0ojx.onrender.com'
})

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

//autenticação dos dados. Usuário só pode cadastrar temas se estiver cadastrado.
export const busca = async(url: any,setDado: any, header: any) => { //Dentro do header ele está passando o Token que vai autenticar o usuário
    const resposta = await api.get(url, header) //Passando a URL + Token
    setDado(resposta.data)
}

export const buscaId = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url, header) 
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header) 
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url, dados, header) 
    setDado(resposta.data)
}

export const deleteId = async(url: any, header: any) => { 
    await api.delete(url, header) 
}