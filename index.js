import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'

const filename=fileURLToPath(import.meta.url)
const dirname=path.dirname(filename)
console.log('dirname: ', dirname)
const port=8070
const host='127.0.0.1'

const app=express()
app.use(cors())
app.use(express.static(path.join(dirname, 'public')))


app.get('/',(req,res) =>{
  res.sendFile('index.html',{root: path.join(dirname)},err=>{
    if (err) throw new Error(err)
    console.log('Fichier index servi avec succès.')
  })
})

app.listen(port,host,() => {console.info(`Server started @ http://${host}:${port}.`)})