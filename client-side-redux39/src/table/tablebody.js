import React from 'react';

export default class Tablebody extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            name: this.props.data.name || '',
            phone: this.props.data.phone || '',
            showEditInput: false,
            showTableData: true,
        }
    }
    handleNameSearch = event => {
        this.setState({ name: event.target.value });
    };

    handlePhoneSearch = event => {
        this.setState({ phone: event.target.value });
    };
    editHandle = () => {
        this.setState({ showEditInput: true, showTableData: false })
    }
    editCancel = () => {
        this.setState({ showEditInput: false, showTableData: true })
    }
    saveHandle = () => {
        let name = this.state.name.trim();
        let phone = this.state.phone.trim();
        let id = this.props.data.id
        // let a = [...this.props.data]
        // a[id] = { name, phone }

        this.props.saveHandle(id, name, phone)
        this.setState({ showEditInput: false, showTableData: true })
    }
    resendHandle = () => {
        let { data } = this.props

        this.props.resendHandle(data.id, data.name, data.phone)
        this.setState({ showEditInput: false, showTableData: true })

    }

    render() {
        const { data } = this.props
        if (this.state.showTableData && !this.state.showEditInput) {
            return (

                <tr className='row100'>
                    <td className='column100 column2' data-column="column2">{this.props.index}</td>
                    <td className='column100 column1' data-column="column1">{this.props.data.name}</td>
                    <td className='column100 column3' data-column="column3">{this.props.data.phone}</td>
                    {data.sent ?
                        <td className='column100 column4' data-column="column4">
                            <button className='btn-update hint--top hint--rounded' aria-label="Update Data on This Table" onClick={() => {
                                this.editHandle(data.id);
                            }}><i className="fa fa-arrow-circle-up"></i></button>
                            <button className='btn-delete hint--top hint--rounded hint--error' aria-label="Delete Data on This Table" onClick={() => {
                                this.props.deleteHandle(data.id);
                            }}><i className="fas fa-minus-circle"></i></button>
                        </td>
                        :
                        <td>
                             <button className='btn-update hint--top hint--rounded' aria-label="Resend Data" style={{'background-color':'black'}} onClick={() => {
                                this.resendHandle(data.id, data.name, data.phone);
                            }}><i className="fa fa-arrow-circle-up"></i></button>
                        </td>
                    }
                    {!data.sent &&
                        <td className='column100 column5' data-column="column5">
                            <label>network failed, please check your connections</label>
                        </td>
                    }
                </tr>
            )
        } else {
            return (
                <tr className='row100'>
                    <td className='column100 column2' data-column="column2">{this.props.index}</td>
                    <td className='column100 column1' data-column="column1">
                        <input name='name' value={this.props.data.name} onChange={this.handleNameSearch}></input></td>
                    <td className='column100 column3' data-column="column3">
                        <input name='phone' value={this.props.data.phone} onChange={this.handlePhoneSearch}></input></td>
                    <td className='column100 column4' data-column="column4">
                        <button className='btn-save hint--top hint--rounded' aria-label="Save Update" ><i className="fa fa-arrow-circle-down" onClick={this.saveHandle}></i></button>
                        <button className='btn-cancel hint--top hint--rounded hint--error' aria-label="Cancel Edit Data" onClick={this.editCancel}><i className="fas fa-times-circle"></i></button>
                    </td>
                </tr>
            )
        }
    }
}
