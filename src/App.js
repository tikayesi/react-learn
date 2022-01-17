import logo from './logo.svg';
import './App.css';
import {Component, createContext} from "react";
import NumberSatu from './component/Number1';
import NumberDua from './component/Number2';
import { connect } from 'react-redux';
import ActionType from './redux/reducer/globalActionType';
import Parent from './component/parent';

export const RootContext = createContext();
const Provider = RootContext.Provider;

class App extends Component{
    state = {
        globalNumber: 5
    }

    dispatch = (action) => {
        if(action.type === "PLUS"){
            return this.setState({
                globalNumber : this.state.globalNumber + 1
            })
        }
        if(action.type === "MINUS"){
           return  this.setState({
                globalNumber : this.state.globalNumber - 1
            })
        }

    }

    render(){
        console.log(this.props);
        return (
            <Provider value={
                {
                    state : this.state,
                    dispatch : this.dispatch
                }
            }>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                {/* <h1>{this.props.numb}</h1>
                <button onClick={this.props.handlePlus}>Plus</button>
                <button onClick={this.props.handleMinus}>Minus</button> */}
                <NumberSatu/>
                 <NumberDua/>
                {/* <Parent/> */}
            </div>
            </Provider>
        );
    }
    }

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

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
