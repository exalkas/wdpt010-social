const express = require('express');
const cookieParser = require('cookie-parser')
const app = express()
const db = require('./config/db');
require('dotenv').config()
db()

app.use(express.json()) // to process the req.body
app.use(cookieParser())
app.use('/images', express.static('./uploads'))
app.use('/user', require('./routes/userRoutes'))
app.use('/post', require('./routes/postRoutes'))
app.use('/comment', require('./routes/commentRoutes'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server is up and running at port', port))

const path = require('path');
// console.log('PATH is', path.resolve(__dirname, 'client', 'build', 'index.html'))
// console.log("🚀 ~ path.resolve(__dirname", path.resolve(__dirname))
console.log("🚀 ~ __dirname", __dirname)


// ADD THESE AT THE END OF SERVER
app.use(express.static('client/build'));

if( process.env.NODE_ENV === 'production' ) {

    const path = require('path');

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}