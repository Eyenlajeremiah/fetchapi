// server.js (using Express.js)

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// email and GitHub URL
const email = 'oluwadahunsieyenla@gmail.com';
const github_url = 'https://github.com/Eyenlajeremiah';

app.use(cors()); // Enable CORS for all origins

app.get('/', (req, res) => {
  const current_datetime = new Date().toISOString();

  const response = {
    email: email,
    current_datetime: current_datetime,
    github_url: github_url,
  };

  res.json(response);
});


app.get('/api', (req, res) => {
  const current_datetime = new Date().toISOString();

  const response = {
    email: email,
    current_datetime: current_datetime,
    github_url: github_url,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(Server listening on port ${port});
});



// Example usage (client-side JavaScript)
fetch('https://your-deployed-url.com') // Replace with your deployed URL
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the received data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });





