import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Adjusted to use the merged connectDB.js file
import { app } from './app.js';

// Load environment variables from .env file
dotenv.config({
    path: './.env', // Ensure this path is correct relative to your project structure
});

connectDB()
    .then(() => {
        // Start the server after successful database connection
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`⚙️ Server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("MONGODB connection failed!!!", err);
        process.exit(1); // Exit if the connection fails
    });
