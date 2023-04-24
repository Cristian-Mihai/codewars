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

const PORT = 3001;
app.listen(PORT, () => {
  console.log('server running')
});