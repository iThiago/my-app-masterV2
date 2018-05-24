import React, {Component} from 'react';
import moment from 'moment';
import TodoListService from '../services/TodoListService';


class TarefasInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            qtdTarefas: 0,
            tarefa: {}
        }
    }

    componentWillReceiveProps(props) {
        this.setState({qtdTarefas: props.tarefas.length});
    }

    finalizaTarefa(event,tarefa){
        event.preventDefault();

        const index = this.props.tarefas.indexOf(tarefa);
        let {tarefas} = this.props             
        tarefas[index].dataFinalizacao = new Date();
        tarefas[index].finalizada = true;
        
        this.props.updateTarefas(tarefas);
            

        TodoListService.finalizarTarefa(tarefa).then(res =>{
            
        }).catch(e => {
            alert(e);
        })
        
    }

    deletaTarefa(event,tarefa ){
        event.preventDefault();

        TodoListService.deletarTarefa(tarefa).then(res =>{
            debugger;
            const index = this.props.tarefas.indexOf(tarefa);
            let {tarefas} = this.props             
            tarefas.splice(index, 1);
            this.props.updateTarefas(tarefas);
            
        }).catch(e => {
            alert(e);
        })

    }

      render(){
         
        const {tarefas} = this.props;
          if(!this.props.tarefas.length > 0){
            return (
                <h1>...</h1>
            )
          }else{
                    
            const tarefasList = tarefas.map((tarefa, key) => {
               
                return (
                  <tr>
                      <td>{tarefa.id} </td>
                      <td >{tarefa.descricao} </td>
                      <td>{ moment(tarefa.dataCriacao).format("DD/MM/YYYY") } </td>
                      <td>{ moment(tarefa.dataFinalizacao).format("DD/MM/YYYY") } </td>
                      <td> <input type="checkbox"  className="checkGrande" checked={tarefa.finalizada} /></td>
                      <td> <button className="btn brn-success" onClick={(event) => this.finalizaTarefa(event,tarefa)} >Finalizar </button> </td>
                      <td> <button className="btn btn-danger"  onClick={(event) => this.deletaTarefa(event,tarefa)} >Excluir</button> </td>
                       </tr>
                )
          });
          return (
            <div> 
                <table className="table"> 
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col" >Descrição</th>
                            <th scope="col">Data Criacão</th>
                            <th scope="col">Data Finalizacão</th>
                            <th scope="col">Finalizada?</th>
                            <th scope="col" >Finalizar</th>
                            <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefasList}
                    </tbody>
                </table>

                <h4> total de {this.state.qtdTarefas} tarefas </h4>

            </div>
          );
        }
    }   
}


export default TarefasInfo;