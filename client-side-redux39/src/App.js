import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Add from './add/add'
import Header from './header/header'
import Table from './table/table'
import './App.css';
import * as AppActions from './actions'


class App extends Component {
  state = {
    datatable: []
  }
  // componentDidMount(){
  //   this.props.actions.loadPHoneBooks();
  // }
  componentDidMount(){
    this.props.actions.loadPHoneBooks();
    // console.log('awal',this.props.data);
    
  }
  
  // deleteHandle = (removeSelected) => {
  //   this.setState((prevState) => ({
  //     datatable: prevState.datatable.filter((alldata) => alldata.id !== removeSelected)
  //   }))
  // }
  // saveHandle = (name, phone, id) => {
  //   let a = [...this.state.datatable]
  //   a[id] = {name, phone}

  //   this.setState((prevState) => ({
  //     datatable: a
  //     // prevState.datatable.map((editdata, i) =>  (editdata.name === name ? {...editdata, phone} : editdata)
  //     //  )
  //   }))
  // }
  render() {
    
    const {data, actions} = this.props
    console.log('dalem', this.props.data);
    
    return (
      <div className="App">
        <Header />
        <Add
          inputHandle={actions.addPHoneBook}
        />
        <Table
          data={data}
          actions={actions}
          deleteHandle={actions.deletePhoneBook}
          saveHandle={actions.editPhoneBook}
          resendHandle={actions.ResendAdd}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    data: state.data
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
