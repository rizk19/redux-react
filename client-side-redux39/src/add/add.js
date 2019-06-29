import React from 'react';
import Addform from './form'
import Addbutton from './button'

export default class Add extends React.Component {
    state = {
        showFormAdd: false,
        showButtonAdd: true
    }
    addClick = () => {
        this.setState({ showFormAdd: true })
        this.setState({ showButtonAdd: false })
    }

    cancelClick = () => {
        this.setState({ showFormAdd: false })
        this.setState({ showButtonAdd: true })
    }

    render() {
        return (
            <div>
                {this.state.showButtonAdd ? <Addbutton
                    addClick={this.addClick}
                /> : null}
                {this.state.showFormAdd ? <Addform
                    cancelClick={this.cancelClick}
                    showFormAdd={this.state.showFormAdd}
                    showButtonAdd={this.state.showButtonAdd}
                    inputHandle={this.props.inputHandle}
                /> : null}
            </div>
        )
    }
}