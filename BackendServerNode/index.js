const Express = require("express")
const Cors = require("cors")
const Users = require("./Data/Users.json")
const Females = require("./Data/Females.json")
const App = Express()

App.use(Cors())
App.use(Express.json())

App.get('/getFemales', (req, res) => {
    res.status(200).send(Females)
})

App.post("/postFemales", (req, res)=>{
    const Data = req.body
    res.send(JSON.stringify({message : "the Females has been recieved"}))
})

App.get('/getUsers', (req, res) => {
    res.send(Users)
})

App.post("/postUsers", (req, res)=>{
    const Data = req.body
    res.send(JSON.stringify({message : "the Users has been recieved"}))
})

const port = 3001
App.listen(port, ()=>{
    console.log(`the port is running at ${port}`)
})

//to run the server we use node filename.js