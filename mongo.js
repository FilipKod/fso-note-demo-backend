const config = require('./utils/config')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content:
    'second note in test db',
  important: false,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})

// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })
