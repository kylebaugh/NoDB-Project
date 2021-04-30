import {Component} from 'react'

class GetCost extends Component{
    constructor(){
        super()
        this.state = {
            editMode: false

        }
    }

    toggleEdit= () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render(){
        return this.state.editMode ? (
            <div>
                <h1>Cost: The lives of all the Jedi</h1>
                <h1>Power: UNLIMITED</h1>
                <img 
                src={'https://i.ytimg.com/vi/Sg14jNbBb-8/maxresdefault.jpg'}
                alt={'Palpatine the Boss'}
                style={{width:'25vw'}}
                ></img><br></br>
                <button onClick={this.toggleEdit}>Reset</button>
            </div>
        ):(
            <div>
                <button onClick={this.toggleEdit}>Calculate Cost and Power</button>
            </div>
        )
    }
}

export default GetCost