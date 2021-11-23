import {Component} from "react";

class Clock extends Component{

    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        // berfungsi untuk memanggil sebuah fungsi secara terus menerus berdasarkan
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }


    render(){
        return(
            <div>
                <h4>It's {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Clock;