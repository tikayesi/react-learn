import {Component} from "react";

class NumberForm extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        alert('A name was submitted: ' + this.state.value);
        //.preventDefault();
    }

    render() {
        return (
            <form onSubmit={() => this.handleSubmit()}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={(ev) => this.handleChange(ev)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NumberForm;