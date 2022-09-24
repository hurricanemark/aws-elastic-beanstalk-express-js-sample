const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to TechRolEmi!  We are in aws-elastic-beanstalk-express-js-sample.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
