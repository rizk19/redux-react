import React from 'react';

export default class Addform extends React.Component {


    inputHandle = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value
        const phone = e.target.elements.phone.value

        this.props.inputHandle(name, phone)
        e.target.elements.name.value = ''
        e.target.elements.phone.value = ''
        this.props.cancelClick()
    }

    render() {
        return (
            <div className="formBox">
                <div className="formHead">
                    <p>Adding Form</p>
                </div>
                <hr></hr>
                <div className="formBody">
                    <form onSubmit={this.inputHandle}>
                        <div className='row'>
                            <div className='col-form'>
                                <label>Name</label>
                            </div>
                            <div className='col-form'>
                                <input name='name'></input>
                            </div>
                            <div className='col-form'>
                                <label>Phone</label>
                            </div>
                            <div className='col-form'>
                                <input name='phone'></input>
                            </div>
                            <div className='col'>
                                <button className='btn-save hint--top hint--rounded hint--info' type='submit' aria-label="Save This Input!"><i className="fas fa-check-circle"></i></button>
                            </div>
                            <div className='col'>
                                <button className='btn-cancel hint--top hint--rounded hint--error' aria-label="Cancel Adding Input" onClick={this.props.cancelClick}><i className="fas fa-times-circle"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

