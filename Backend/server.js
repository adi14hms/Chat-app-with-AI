import 'dotenv/config';  // Import the dotenv package and configure it to use the .env file
import http from 'http';    
import app from './app.js';

const port = process.env.PORT || 3000;  // Set the port to the environment variable PORT or 3000 if it is not defined

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});