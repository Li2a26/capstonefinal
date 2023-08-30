const express = require ('express')
const routes = express.Router
const bodyParser = require ('body-parser')
// const path = require('path')
const {verifyAToken } = require ('../middleware/authentication')
//import all model's objects 
// const {users , products} = require('../model')
const {users ,} = require ('../model')
 
//user's router 
routes.get ('/users', (req , res ) => {
    users.fetchUsers (req, res)
})
routes.get ('/user/:id', (req , res ) => {
    users.fetchUsers (req, res)
})
routes.post ('/register', bodyParser.json(), 
(req , res ) => {
    users.register (req, res)
})
routes.put ('/user/:id', bodyParser.json(), 
(req , res ) => {
    users.updateUser (req, res)
})
routes.patch ('/user/:id', bodyParser.json(), 
(req , res ) => {
    users.updateUser (req, res)
})
routes.delete ('/user/:id', (req , res ) => {
    users.delete (req, res)
})
routes.post ('/login',
 bodyParser.json(), (req , res ) => {
    users.login (req, res)
})
//finish this .> 