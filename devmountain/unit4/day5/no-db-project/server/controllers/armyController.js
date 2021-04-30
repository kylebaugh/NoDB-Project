let army = [
    {
        id: 0,
        name: 'Alpha Platoon',
        powerLevel: 20,
        cost: 12000,
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 1,
        name: 'Starcruiser',
        powerLevel: 4000,
        cost: 500000,
        image: 'https://lumiere-a.akamaihd.net/v1/images/databank_republicattackcruiser_01_169_812f153d.jpeg?region=0%2C0%2C1560%2C878&width=1536'
    }
]

let id = 2

module.exports = {

    getArmy: (req, res) =>{
        res.status(200).send(army)
    },

    addItem: (req, res) => {
        let {name, image, cost, powerLevel} = req.body
        const armyItem = {
            id: +id,
            name,
            cost,
            image, 
            powerLevel
            
        }

        army = [...army, armyItem]
        id++
        res.status(200).send(army)
    },

    deleteItem: (req, res) => {
        const {id} = req.params
        const index = army.findIndex((e) => {
            return e.id === +id
        })

        army.splice(index,1)
        res.status(200).send(army)
    },

    editItem: (req, res) => {
        let {id} = req.params
        let {name, powerLevel} = req.body
        const index = army.findIndex((e) => {
            return e.id === +id
        })

        army.splice(index,1, {
            id: army[index].id,
            name, 
            powerLevel: army[index].name,
            image: army[index].image
        })

        res.status(200).send(army)
    }
}