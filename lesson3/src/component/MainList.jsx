import React ,{Component} from 'react';

export default class MainList extends Component{
    constructor(props){
        super(props)
        this.state = {name:'Geeks', age:15 , show:false}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    render() {
        return(
            <div>
                { 
                this.state.show ? <p>имя:{this.state.name} , возраст: {this.state.age}</p>
                :
                <p>name: {this.state.name},age:{this.state.age}</p>
                }
                <button onClick={this.handleClick}>
                    Нажми на меня!
                </button>
            </div>
        )
}}