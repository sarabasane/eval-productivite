import express, { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import expressSession from 'express-session'
import { MongoClient } from 'mongodb'

const app = express()
app.set('view engine', 'pug')
const adminRouter = Router()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const mongoUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'evaldiwjs17'
const collName = 'users'
const mongoClient = new MongoClient(mongoUrl)

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRouter)
app.use(expressSession({
  secret: 'secret de la session',
  resave: false,
  saveUninitialized: false
}))

const PORT = 8080
const host = '127.0.0.1'

const loadDefaultProfile = () => {
  req.session.isLoggedIn = req.session.isLoggedIn || false;
  req.session.pseudo = req.session.pseudo || 'petit nouveau';
};

app.get('/', (req, res) => {
  loadDefaultProfile();
  console.log('pseudo? ', req.session.pseudo, 'isLoggedIn? ', req.session.isLoggedIn)
  res.render('index.pug', {
    pageTitle: 'Accueil'
  })
})

app.get('/register', (req, res) => {
  loadDefaultProfile();
  res.render('register.pug', {
    pageTitle: 'Enregistrement'
  })
})

app.get('/login', (req, res) => {
  loadDefaultProfile();
  res.render('login.pug', {
    pageTitle: 'Connexion'
  })
})

app.get('/comment', (req, res) => {
  loadDefaultProfile();
  if (!req.session.isLoggedIn) {
    res.send(`<h2>Vous devez être connecté pour laisser un commentaire. Merci de vous connecter <a href="/login" >ici</a>`);
  } else {
    res.render('comment.pug', {
      pageTitle: 'Commentaire',
      user: {
        pseudo: req.session.pseudo,
        isConnected: req.session.isLoggedIn
      }
    })
  }
})

app.post('/register', (req, res) => {
  mongoClient.connect(async (err, client) => {
    if (err) {
      throw new Error(err)
    }
    const users = client.db(dbName).collection(collName)
    
    const existingUser = await users.findOne({$and: [{$eq: {pseudo: req.body.pseudo}}, {$eq: {password: req.body.password}}]})
    
    if (existingUser) {
      res.send(`<h2>Un compte existe déjà avec cette combinaison d'email et mot de passe. Merci de vous connecter <a href="/login" >ici</a>`);
    } else {
      users.insertOne({
        email: req.body.email,
        pseudo: req.body.pseudo,
        password: req.body.password,
      }, (err, result) => {

      })
    }
  })
})

app.post('/login', (req, res) => {
  mongoClient.connect((err, client) => {
    if (err) {
      throw new Error(err)
    }
    const users = client.db(dbName).collection(collName)

    users.findOne({$and: [{$eq: {pseudo: req.body.pseudo}}, {$eq: {password: req.body.password}}]}, (err, user) => {
      if (err) {
        throw new Error(err)
      }
      req.session.isLoggedIn = true
      req.session.pseudo = user.pseudo
      client.close()
      res.redirect('/')
    })
  })
})


app.listen(PORT, host, () => {
  console.info(`Server listening at http://${host}:${PORT}`);
})