import React, {Component} from 'react';
import TodoListService from '../services/TodoListService';
import InserirForm from './InserirForm';

export class Inserir extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          tarefa: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
  
    handleUserInput(e) {
        let {tarefa} = this.state;
        const name = e.target.name;
        const value = e.target.value;
        tarefa[name] = value;
        this.setState({tarefa})
    }

    handleSubmit(event) {
        event.preventDefault();

        let {tarefa} = this.state;

        tarefa.dataCriacao = new Date();
        tarefa.finalizada = false;
        tarefa.dataFinalizacao = null;      
        this.setState({tarefa})

        TodoListService.criarTarefa(this.state.tarefa).then(
        res => {
            alert("Adicionado com sucesso");
        }).catch(e =>{
            alert("Ocorreu um erro ao adicionar! " + e);
        });

    }

    render() {
        return (
            <InserirForm handleSubmit={this.handleSubmit} handleUserInput={this.handleUserInput} />
          );
   }
};

export default Inserir;