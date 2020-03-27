const app = require('./app')

const port = 3333;

try {
    app.listen(port, () => {
        console.clear();
        console.log('\x1b[32m%s\x1b[0m','Server Connected Successfully!');
    })
} catch (error) {
    console.log('\x1b[31m%s\x1b[0m','Connection to the Server Failed!');
    console.log('\x1b[33m%s\x1b[0m',error.message)
}