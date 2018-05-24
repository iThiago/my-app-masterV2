import axios from 'axios'

const TodoListService = {

    obterTarefas: () => {
        return axios.get("https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev")
    },

    criarTarefa: (tarefa) => {
        return axios.post("https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev",tarefa)
    },

    finalizarTarefa: (tarefa) => {
        return axios.put("https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev?id=" + tarefa.id,tarefa)
    },

    deletarTarefa: (tarefa) => {
        return axios.delete(`https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev`,{data: tarefa})
    }
};

export default TodoListService;