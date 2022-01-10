import { Component } from "react";
import { RootContext } from "../App";
import ActionType from "../redux/reducer/globalActionType";

class NumberSatu extends Component{
    render(){
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return(
                            <div>
                            {value.globalNumber}
                            <button onClick={this.props.handlePlus}>Plus</button>
                            <button onClick={this.props.handleMinus}>Minus</button>
                        </div>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}

export default NumberSatu;

// const mapStateToProps = (state) => {
//     return {
//         numb: state.globalNumber
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         handlePlus: () => dispatch({type: ActionType.PLUS}),
//         handleMinus: () => dispatch({type: ActionType.MINUS})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NumberSatu);