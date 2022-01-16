import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import FormFormik from './FormFormik';
// formik + yup
// https://medium.com/javascript-indonesia-community/validasi-form-pada-aplikasi-react-dengan-formik-yup-afef7ac2bbb1

class App extends Component{

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                    <FormFormik/>
            </div>
        );
    }
    }


export default App;
