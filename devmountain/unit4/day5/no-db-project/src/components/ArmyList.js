import axios from 'axios'
import {Component} from 'react'
import AddItem from './AddItem'
import ManageItem from './ManageItem'
import GetCost from './GetCost'

class ArmyList extends Component{
    constructor(){
        super()
        this.state = {
            armyArray: []

        }
    }

    componentDidMount(){
        axios.get("/api/army")
            .then((res) => {
                this.setState({
                    armyArray: res.data
                    })
                    console.log(this.state.armyArray)
                })
            .catch((err) => {console.log(err)})
    }

    addItem = (name, powerLevel, cost, image) => {
        axios.post("/api/army", {name, powerLevel, cost, image})
            .then((res) => {
                this.setState({
                    armyArray: res.data
                })
            })
            .catch((err) => {console.log(err)})
    }

    deleteItem = (id) => {
        axios.delete(`/api/army/${id}`)
            .then((res) => {
                this.setState({
                    armyArray: res.data
                })
            })
            .catch((err) => {console.log(err)})
    }

    editItem = (id, name) => {
        axios.put(`/api/army/${id}`, {name})
            .then((res) => {
                this.setState({
                    armyArray: res.data
                })
            })
            .catch((err) => {console.log(err)})
    }

    render(){
        
        return(
            
            <div style={{backgroundColor:'lightgray', width:'95vw', display:'flex', flexDirection:'column', marginLeft:'2.5vw', marginBottom:'2.5vw',
             }}>
                <AddItem 
                addItem = {this.addItem}
                />
                <h1>Resource List</h1>
                <div style={{
                display:'flex', flexDirection:'row', justifyContent:'space-evenly',
                marginLeft:'2.5vw', marginRight:'2.5vw', 
                }}>   
                {this.state.armyArray.map((item) => {
                    return(
                        <div style={{
                            width:'15vw'
                            }}>
                            <ManageItem
                                item={item}
                                deleteItem={this.deleteItem}
                                editItem={this.editItem}
                            />
                        </div>
                    )
                })}
                </div>
                <br></br>
                <br></br>
                <GetCost />
            </div>
            
        )
    }
}

export default ArmyList