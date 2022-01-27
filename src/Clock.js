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
        console.log("Component did mount called");
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentDidUpdate(){
        // ketika ada perubahan interval maka fungsi ini terpanggil terus menerus
        console.log("component did update terpanggil");
    }

    componentWillUnmount() {
        // terpanggil ketika unmount atau component di destroy
        // coba aja di hot reload aplikasinya maka terpanggil
        console.log("component will unmount called");
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }

    // salah satu lifecycle yang tidak common
    // ketika kita tidak ingin react merender perubahan state atau props
    // balikannya berupa boolean
    // ketika return false maka interval time berhenti dan fungsi ini terpanggil
    // ketika return true fungsi componentDidUpdate terpanggil dan fungsi ini juga
    shouldComponentUpdate(){
        console.log("should component update called");
        return true
    }

    //function terbaru
//     This will be a safer alternative to the previous lifecycle method componentWillReceiveProps().

// It is called just before calling the render() method.
    static getDerivedStateFromProps(){
        console.log("get derivied");
    }

    // getSnapshotBeforeUpdate() is another new lifecycle method introduced in React recently. This will be a safer alternative to the previous lifecycle method componentWillUpdate().
    getSnapshotBeforeUpdate(){
        console.log("snapshot");
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