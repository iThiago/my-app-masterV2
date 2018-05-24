import React, {Component} from 'react';
import TodoListService from '../services/TodoListService';
import TarefasTable from './TarefasTable';

class TarefasInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            tarefa: {}
        }
        this.finalizaTarefa = this.finalizaTarefa.bind(this);
        this.deletaTarefa = this.deletaTarefa.bind(this);
    }

    finalizaTarefa(event,tarefa){
        event.preventDefault();                  
        
        tarefa = this.alteraParaFinalizada(tarefa);

        TodoListService.finalizarTarefa(tarefa).then(res =>{
        
           this.alteraTarefaArray(tarefa);
            
        }).catch(e => {
            alert(e);
            tarefa.finalizada = false;
            tarefa.dataFinalizacao = null;
            this.alteraTarefaArray(tarefa);
        })
        
    }

    deletaTarefa(event,tarefa ){
        event.preventDefault();

        TodoListService.deletarTarefa(tarefa).then(res =>{
           
           this.deletaTarefaArray(tarefa);
            
        }).catch(e => {
            alert(e);
        })

    }

      render(){
         return (
            <TarefasTable
            tarefas={this.props.tarefas}
            finalizaTarefa={this.finalizaTarefa}
            deletaTarefa={this.deletaTarefa} />
        )
    }
    
    alteraTarefaArray(tarefa){
        const index = this.props.tarefas.indexOf(tarefa);
        let {tarefas} = this.props             
        tarefas[index].dataFinalizacao = tarefa.dataFinalizacao
        tarefas[index].finalizada = tarefa.finalizada;
        this.props.updateTarefas(tarefas);
    }

    alteraParaFinalizada(tarefa){
        tarefa.dataFinalizacao = new Date();
        tarefa.finalizada = true;
        return tarefa;
    }

    deletaTarefaArray(tarefa){
        const index = this.props.tarefas.indexOf(tarefa);
        let {tarefas} = this.props             
        tarefas.splice(index, 1);
        this.props.updateTarefas(tarefas);
    }

}


export default TarefasInfo;