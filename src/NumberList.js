import {Component} from "react";

class NumberList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            newItem:"",
            list: []
        }
    }


    handleChange(key, value){
        //this.setState({value : event.target.value})
        this.setState({
            [key]: value
        })
    }

    handleSubmit (event) {
        const newItem = {
            id: 1 + Math.random(),
            value : this.state.newItem.slice()
        }

        const list = [...this.state.list];

        list.push(newItem)

      this.setState({
              list,
              newItem:""
    }

      )
    }

    render() {
           let listItem = this.state.list.map((number) => {
               return <li key={number.id}>{number.value}</li>
           })

        return(
            <div>
                    <label>
                    <input type="text" name="name" value={this.state.newItem}
                    onChange={e => this.handleChange("newItem", e.target.value)}/>
                    </label>
                    <input type="submit" value="Submit" onClick={() => this.handleSubmit()}/>
                <ul>{listItem}</ul>
            </div>
        )
    }
}

export default NumberList;