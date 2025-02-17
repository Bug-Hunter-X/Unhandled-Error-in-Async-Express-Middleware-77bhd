const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      res.send('Hello World!');
    } else {
      const error = new Error('Something went wrong!');
      next(error); // Pass the error to the error handling middleware
    }
  }, 1000);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});