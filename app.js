//Set up dependencies
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const path = require("path");
const connectDB = require('./config/database')

//Routes
const mainRoutes = require('./routes/main')
const destinationRoutes = require('./routes/destinations')

//Set up config files
require('dotenv').config({path: './config/.env'})

//Passport Config
require('./config/passport')(passport)
connectDB()


//Allows for ejs rendering 
app.set("view engine", "ejs");
app.set("views", "./views");

//allows for specific middleware to be used whenever a request is sent 
//to the server
app.use(express.urlencoded({ extended: true })) //allows for incoming data to be recognized as string data
app.use(express.json())//allows for incoming data as a JSON object

//allows for static files
app.use(express.static('public')); 
app.use(express.static(path.join(__dirname, 'public')))

// Method Overrides
app.use(methodOverride("_method"));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method
      delete req.body._method
      return method
    }
  }))

//Enables session
app.use(
  session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 360000 },
      store: MongoStore.create({
          mongoUrl: process.env.MONGO_URI,
      })
})
)

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Flash enabler i.e validation messages
app.use(flash())

//Routes
app.use('/', mainRoutes)
app.use('/destinations', destinationRoutes)


app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})