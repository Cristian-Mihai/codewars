const express = require('express');
const app = express();
app.use(express.json())
const phonebook =[
  { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => 
  res.json(phonebook)
);

app.get('/api/info', (req,res) => {
  const date = new Date()
  const message = `<p>Phonebook has info for ${phonebook.length} people</p>
  <p>Request was made at ${date}</p>`
  res.send(message)
}) 

app.get('/api/persons/:id', (req,res) => {
  const id = Number(req.params.id)
  const entry = phonebook.find (person => person.id === id)

  if (entry) {
    res.json(entry)
  }
  else{
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  phonebook = phonebook.filter(person => person.id !== id)
  
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  const existingPerson = phonebook.find(person => person.name === body.name)
  if (existingPerson) {
    return res.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const newPerson = {
    id: Math.floor(Math.random() * 10000),
    name: body.name,
    number: body.number,
  }

  phonebook = phonebook.concat(newPerson)

  res.json(newPerson)
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log('server running')
});