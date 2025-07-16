const express = require('express');
const app = express();
app.use(express.json());

let policies = [];

app.get('/policies', (req, res) => {
  res.json(policies);
});

app.post('/policies', (req, res) => {
  const policy = req.body;
  policy.id = policies.length + 1;
  policies.push(policy);
  res.status(201).json(policy);
});

app.put('/policies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = policies.findIndex(p => p.id === id);
  if (index > -1) {
    policies[index] = { ...policies[index], ...req.body };
    res.json(policies[index]);
  } else {
    res.status(404).send('Policy not found');
  }
});

app.listen(3000, () => console.log('Insurance Policy app listening on port 3000'));