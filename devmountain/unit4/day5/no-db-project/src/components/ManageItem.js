import {Component} from 'react'

class ManageItem extends Component{
    constructor(){
        super()
        this.state = {
            editMode: false,
                newName:''
        }
    }

    handleNewName = (e) => {this.setState({newName: e})}

    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode,
            newName: ''
        })
    }



    handleSave = () => {
        this.props.editItem(this.props.item.id, this.state.newName)
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
                    <button
                        onClick={this.handleSave}
                        >Save
                    </button>
                </div>
            ):
            (
        <div>
            <section style={{display:'flex', flexDirection:'column', backgroundColor:'lightpink'}}>
                    <section style={{display:'flex', flexDirection:'column'}}>
                            <p>{this.props.item.name}</p>
                            <p>Power Level: {this.props.item.powerLevel}</p>
                            <img 
                            src={this.props.item.image}
                            alt={this.props.item.name}
                            style={{width:'15vw'}}
                            ></img>

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