# Unhandled Error in Async Express Middleware

This repository demonstrates a common error in Express.js applications: unhandled errors within asynchronous middleware.  The bug occurs because an error thrown inside a `setTimeout` callback (simulating an asynchronous operation) isn't caught, leading to a server crash.

The `bug.js` file contains the faulty code. The `bugSolution.js` file provides a corrected version that gracefully handles the error.

## How to Reproduce

1. Clone this repository.
2. Run `npm install express` to install the necessary dependencies.
3. Run `node bug.js` to start the server with the faulty code.  You'll see it crash after a random delay (when the `randomNumber` is greater than or equal to 0.5).
4. Run `node bugSolution.js` to start the server with the corrected code.  The server will now handle the error gracefully, logging an error message but continuing to run.

## Solution

The solution involves using error handling mechanisms provided by Express.js, specifically by utilizing the `next(err)` function to pass errors to a global error handler.