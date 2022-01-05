import {Component} from "react";
import withCounter from './withCounter'


class ClickCounter extends Component{

    render() {
        const { count, incrementCount } = this.props
        return(
            <div>
                <button onClick={incrementCount}>Click {count} Times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter);