const mongoose = require('mongoose')
require('dotenv').config();

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const url = process.env.URL

mongoose.set('strictQuery',false)
mongoose.connect(url)

const mongoose = require('mongoose')

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// model
const note = new Note({
  content: 'SQL is Easy',
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

Note.find({important: false}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})


