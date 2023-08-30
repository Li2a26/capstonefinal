const {express , routes} = 
require ('./controller')
const path = require('path')

const app = express()
const port = +
express.use (
    express.static ('./static'),
    routes 
)
app.listten (() => {
    console.log ( 'Server is running on port ${port}); // fix this code .
})