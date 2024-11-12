//Create web server
//Create a web server that listens to incoming requests and responds with the comments data in the comments.js file.

//comments.js
const comments = [
    { username: 'tim', comment: 'i am so hungry' },
    { username: 'jan', comment: 'nice post' },
    { username: 'ryan', comment: 'i love the information in this article' },
    { username: 'linda', comment: 'this is so helpful' },
    { username: 'julian', comment: 'i am so excited' }
];

module.exports = comments;

//server.js
const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

//In the comments.js file, we have an array of comments. We export the array using module.exports so that we can import it in the server.js file.

//In the server.js file, we import the comments array using require('./comments'). We create a web server using the createServer method from the http module. The server listens to incoming requests and responds with the comments data in JSON format.

//We set the Content-Type header to application/json to indicate that the response data is in JSON format. We use JSON.stringify to convert the comments array to a JSON string before sending it as a response.

//Finally, we start the server by calling the listen method on the server object. The server listens on port 3000, and we log a message to the console to indicate that the server is running.

//To run the server, save the comments.js and server.js files in the same directory. Open the terminal and run the following command:

//node server.js
//The server will start running on http://localhost:3000. You can open a web browser and navigate to http://localhost:3000 to see the comments data displayed in JSON format.

//You can also use tools like cURL or Postman to make HTTP GET requests to the server and see the comments data in JSON format.

//This example demonstrates how to create a simple web server using Node.js and respond with data from a JavaScript file. You can modify the comments data in the comments.js file