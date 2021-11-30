import {Component} from "react";

class NumberList2 extends Component{

    state = {
        newItem:"",
        list: []
    }

    handleChange(event){
        this.setState({newItem : event.target.value})
    }

    handleSubmit (event) {
            const list = [...this.state.list];
            list.push(this.state.newItem)
        this.setState({list : list})
        event.preventDefault()
    }

    handleDelete(e) {
        console.log(e.target.value)
        const list = [...this.state.list];
       let test = list.filter(val =>  val !== e.target.value.toString())
        console.log(test)
        this.setState({list : test})
    }

    render() {
        let listItem = <p>There is no value</p>;
           if(this.state.list.length !== 0) {
               listItem = this.state.list.map((number) => {
                   let keyVal = number + Math.random()
                   return <li key={keyVal} value={number} onClick={(e) => this.handleDelete(e)}>{number}</li>
               })
           }

        return(
            <div>
                    <label>
                    <input type="text" name="name" value={this.state.newItem}
                    onChange={e => this.handleChange(e)}/>
                    </label>
                    <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
                <ul>{listItem}</ul>
            </div>
        )
    }
}

export default NumberList2;