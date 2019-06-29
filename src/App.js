import React from 'react';
import Add from './add/add'
import Header from './header/header'
import Table from './table/table'

class App extends React.Component {
  state = {
    datatable: []
  }
  inputHandle = (name, phone) => {
    this.setState((prevState) => ({
      datatable: prevState.datatable.concat({ name, phone })
    }))
    console.log('atas', name, phone);
    
  }
  deleteHandle = (name) => {
    console.log('bawah', name);
    
    this.setState(() => ({
      datatable: this.state.datatable.filter((alldata) => alldata.name !== name)
    }))
  }
  saveHandle = ( id, name, phone ) => {
    console.log(id);
    
    let a = [...this.state.datatable]
    a[id] = { name, phone }
    console.log(a);

    this.setState((prevState) => ({
      datatable: a
      // prevState.datatable.map((editdata, i) =>  (editdata.name === name ? {...editdata, phone} : editdata)
      //  )
    }))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Add
          inputHandle={this.inputHandle}

        />
        <Table
          datatable={this.state.datatable}
          deleteHandle={this.deleteHandle}
          saveHandle={this.saveHandle}
        />
      </div>
    );
  }
}

export default App;
