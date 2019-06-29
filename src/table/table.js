import React from 'react';
import Tablebody from './tablebody'

export default class Table extends React.Component {
    state = {
        name: '',
        phone: '',
        filteredData: []
    }

    handleNameSearch = event => {
        this.setState({ name: event.target.value });
    };

    handlePhoneSearch = event => {
        this.setState({ phone: event.target.value });
    };

    render() {
        const { datatable } = this.props
        var name = this.state.name.trim().toLowerCase()
        var phone = this.state.phone.trim().toLowerCase()

        var filteredData = datatable

        if (name !== '' && phone !== '') {
            filteredData = datatable.filter(item => item.name.toLowerCase().startsWith(name) && item.phone.toLowerCase().startsWith(phone))
        } else if (name !== '') {
            filteredData = datatable.filter(item => item.name.toLowerCase().startsWith(name))
        } else if (phone !== '') {
            filteredData = datatable.filter(item => item.phone.toLowerCase().startsWith(phone))
        }

        return (
            <div>
                <div className="formBox">
                    <div className="formSearchHead">
                        <p>Search Form</p>
                    </div>
                    <hr></hr>
                    <div className="formBody">
                        <form>
                            <div className='row'>
                                <div className='col-form'>
                                    <label>Name</label>
                                </div>
                                <div className='col-form'>
                                    <input name='name' placeholder="name" value={this.state.name} onChange={this.handleNameSearch}></input>
                                </div>
                                <div className='col-form'>
                                    <label>Phone</label>
                                </div>
                                <div className='col-form'>
                                    <input name='phone' placeholder="phone" value={this.state.phone} onChange={this.handlePhoneSearch}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='table100 ver1'>
                    <table data-vertable='ver1'>
                        <thead>
                            <tr className='row100 head'>
                                <th className='column100 column2' data-column="column2">#</th>
                                <th className='column100 column1' data-column="column1">Name</th>
                                <th className='column100 column3' data-column="column3">Phone</th>
                                <th className='column100 column4' data-column="column4">Actions</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredData.map((data, idx) => (
                                    <Tablebody
                                        key={idx}
                                        index={idx + 1}
                                        data={data}
                                        deleteHandle={this.props.deleteHandle}
                                        saveHandle={this.props.saveHandle}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

