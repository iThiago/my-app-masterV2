import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InserirForm extends Component{

    render(){
        return (
            <div>
                <center> 
                    <br/><br/>
                    <form onSubmit={this.props.handleSubmit}>
                        <div class="form-row col-md-4">
                            <div class="form-group col-md-12">
                                <label class="form-control">
                                   <p> Descricao </p>
                                    <input type="text"  className="form-control"
                                     name="descricao" id="descricao" required onChange={(event) => this.props.handleUserInput(event)} />
                                </label>
                            <input type="submit" class="form-control" value="Submit" />
                            </div>
                        </div>
                    </form>
                </center>
            </div>
        )

    }
}

InserirForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUserInput: PropTypes.func.isRequired
};


export default InserirForm;