import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class TarefasTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
         qtdTarefas: 0
        };
    }

    componentWillReceiveProps(props) {
        this.setState({qtdTarefas: props.tarefas.length});
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
                    <td>{   moment(tarefa.dataFinalizacao).isValid() ? moment(tarefa.dataFinalizacao).format("DD/MM/YYYY") : "-" } </td>
                    <td> <input type="checkbox"  className="checkGrande" checked={tarefa.finalizada} /></td>
                    <td> <button className="btn brn-success" onClick={(event) => this.props.finalizaTarefa(event,tarefa)} >Finalizar </button> </td>
                    <td> <button className="btn btn-danger"  onClick={(event) => this.props.deletaTarefa(event,tarefa)} >Excluir</button> </td>
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

                <h4> total de {this.state.qtdTarefas} tarefa(s) </h4>

            </div>
            );
        }
    }
}

TarefasTable.propTypes = {
    finalizaTarefa: PropTypes.func.isRequired,
    deletaTarefa: PropTypes.func.isRequired,
  };

export default TarefasTable;
    