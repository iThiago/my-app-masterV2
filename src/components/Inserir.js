import React, {Component} from 'react';
import TodoListService from '../services/TodoListService';
import InserirForm from './InserirForm';

export class Inserir extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          tarefa: {},
          descricao: ""
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

        let {descricao} = this.state;
        descricao = value;
        this.setState({descricao});
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
            let {descricao} = this.state;
            descricao = "";
            this.setState({descricao});

        }).catch(e =>{
            alert("Ocorreu um erro ao adicionar! " + e);
        });

    }

    render() {
        return (
            <InserirForm handleSubmit={this.handleSubmit} 
            handleUserInput={this.handleUserInput}
            descricao={this.state.descricao} />
          );
   }
};

export default Inserir;