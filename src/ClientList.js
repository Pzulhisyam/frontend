import React, {Component} from 'react';
import {GamepadButton, ButtonGroup,Container, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';

class ClientList extends Component{
    contructor(props){
        super(props);
        this.state = {clients:[]};
        this.remove = this.remove.bind(this);
    }

    compoentnDidMount(){
        fetch('/clients')
        .then(response => response.json())
        .then(data => this.setState({clients:data}));
    }
}
export default ClientList;
