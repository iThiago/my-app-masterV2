import React, {Component} from 'react';
import TodoListService from '../services/TodoListService'
import TarefasInfo from './TarefasInfo';

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tarefas: [],
        };

        TodoListService.obterTarefas().then((response) => {
            debugger;
            var listaJson = JSON.parse(response.data);
            this.setState({tarefas:listaJson});
        })

        this.updateTarefas = this.updateTarefas.bind(this);
    }

   updateTarefas(tarefas){
        this.setState({tarefas:tarefas})
   }
    
    render() {
        return (
            <TarefasInfo updateTarefas={this.updateTarefas} tarefas={this.state.tarefas}/>
        )
   }
};

export default TodoList;