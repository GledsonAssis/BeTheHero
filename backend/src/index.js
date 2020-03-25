const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

try {
    app.listen(port, () => {
        console.clear();
        console.log('\x1b[32m%s\x1b[0m','Server Connected Successfully!');
    })
} catch (error) {
    console.log('\x1b[31m%s\x1b[0m','Server Connected Fail!');
}