import {Component} from 'react'

class ManageItem extends Component{
    constructor(){
        super()
        this.state = {
            editMode: false,
                newName:'',
                newCost:'',
                newPowerLevel:''
        }
    }

    handleNewName = (e) => {this.setState({newName: e})}
    handleNewCost = (e) => {this.setState({newCost: e})}
    handleNewPowerLevel = (e) => {this.setState({newPowerLevel: e})}

    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode,
            newName: '',
            // newCost:'',
            // newPowerLevel:''
        })
    }

    handleSave = () => {
        this.props.editItem(this.props.item.id, this.state.newName, this.state.newPowerLevel, this.state.newCost)
        // this.props.editItem(this.props.item.id, this.state.newCost)
        // this.props.editItem(this.props.item.id, this.state.newPowerLevel)
        this.toggleEdit()
        console.log(this.props.item.newName)
    }

    
    render(){
        return this.state.editMode ? (
                <div>Edit Mode
                    <input
                        value={this.state.newName}
                        onChange={(e) => this.handleNewName(e.target.value)}
                        placeholder={'Change Name'}
                        >
                    </input>
                    <input
                        value={this.state.newCost}
                        onChange={(e) => this.handleNewCost(e.target.value)}
                        placeholder={'Change Cost'}
                        >
                    </input>
                    <input
                        value={this.state.newPowerLevel}
                        onChange={(e) => this.handleNewPowerLevel(e.target.value)}
                        placeholder={'Change Power Level'}
                        >
                    </input>
                    <br></br>
                    <button
                        onClick={this.handleSave}
                        >Save
                    </button>
                </div>
            ):
            (
        <div>
            <section style={{display:'flex', flexDirection:'column', backgroundColor:'#3a3a3a', 
                        paddingBottom:'2vh', borderStyle:'solid', borderColor:'blue'}}>
                    <section style={{display:'flex', flexDirection:'column', lineHeight:'20px', color:'white'}}>
                            <p>
                                Name: {this.props.item.name}
                                    <br></br>
                                Cost: {this.props.item.cost}
                                    <br></br>
                                Power Level: {this.props.item.powerLevel}
                                    <br></br>
                                    <br></br>
                                <img 
                                    src={this.props.item.image}
                                    alt={this.props.item.name}
                                    style={{width:'15vw'}}
                                ></img>
                            </p>


                    </section>
                    <section>
                          <button 
                            onClick={this.toggleEdit}
                            >
                            Edit
                          </button>
                          <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete</button>
                    </section>

            </section>
        </div>
        )
        
    }
}

export default ManageItem