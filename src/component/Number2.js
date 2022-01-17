import { Component } from "react";
import { connect } from "react-redux";
import {RootContext} from "../App";

class NumberDua extends Component{
    state = {
        numb : 1
    }
    render(){
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return(
                            <div>
                                {value.state.globalNumber}
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         numb: state.globalNumber
//     }
// }
//
// export default connect(mapStateToProps)(NumberDua);
export default NumberDua;