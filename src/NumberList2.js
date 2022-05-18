import {Component} from "react";

class NumberList2 extends Component{

    state = {
        newItem:"",
        list: [],
        isValid : true,
        errorName : ''
    }

    handleChange=(event)=>{
        if(event.target.value.length >= 5){
            this.setState({
                isValid : false,
                errorName : ""
            })
        }else{
            this.setState({
                isValid : true,
                errorName : "5 min length"
            })
        }
        // if(!event.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)){
        //              this.setState({
        //         isValid : true,
        //         errorName : "format email tidak sesuai"
        //     })
        // }else{
        //     this.setState({
        //         isValid : true,
        //         errorName : ""
        //     })
        // }
        this.setState({newItem : event.target.value})
    }

    handleSubmit = (event) => {
            const list = [...this.state.list];
            list.push(this.state.newItem)
        this.setState({list : list})
        event.preventDefault()
    }

    handleDelete = (e) => {
        console.log(e.target.value)
        const list = [...this.state.list];
       let test = list.filter(val =>  val !== e.target.value.toString())
        console.log(test)
        this.setState({list : test})
    }

    render() {
        // let listItem = <p>There is no value</p>;
        //    if(this.state.list.length !== 0) {
        //        listItem = this.state.list.map((number) => {
        //            console.log(number);
        //            let keyVal = number + Math.random()
        //            return <li key={keyVal} value={number} onClick={this.handleDelete}>{number}</li>
        //        })
        //    }

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <input type="text" name="name" value={this.state.newItem}
                    onChange={e => this.handleChange(e)}/>
                    <p>{this.state.errorName}</p>
                    </label>
                    <br/>
                    <input disabled={this.state.isValid} type="submit" value="Submit" 
                    // onClick={(e) => this.handleSubmit(e)}
                    />
                {/* <ul>{listItem}</ul> */}
                <ul>{this.state.list.length !== 0 ? this.state.list.map((number) => {
                   console.log(number);
                   let keyVal = number + Math.random()
                   return <li key={keyVal} value={number} onClick={this.handleDelete}>{number}</li>
               }) : <p>There is no value</p>}</ul>
                </form>
            </div>
        )
    }
}

export default NumberList2;