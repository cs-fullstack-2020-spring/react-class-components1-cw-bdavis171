import React, {Component} from 'react';

class BankAccount extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>Welcome {this.props.customerName}</h3>
                <h3>Your account balance is {this.props.balance}</h3>
            </div>
        );
    }
}

export default BankAccount;