const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001; 
const DATA_FILE = 'users.json';


app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());


const loadUsers = () => {
  try {
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};


const saveUsers = (users) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};


app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  let users = loadUsers();
  
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);
  saveUsers(users);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});


app.get('/users', (req, res) => {
  const users = loadUsers();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});