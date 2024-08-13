import mongoose from "mongoose";
import { DB_NAME_Stocks, DB_NAME_Customer ,DB_NAME_Farmer} from "../constants.js";

const connectDB = async () => {
    try {
        // Connecting to the Stocks database
        const connectionInstanceStocks = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME_Stocks}`);
        console.log(`\nStocks Database connected!! DB HOST: ${connectionInstanceStocks.connection.host}`);

        // Create a new connection for the Customer database
        const connectionInstanceCustomer = mongoose.createConnection(`${process.env.MONGODB_URI}/${DB_NAME_Customer}`);
        console.log(`\nCustomer Database connected!! `);

        // Create a new connection for the Customer database
        const connectionInstanceFarmer = mongoose.createConnection(`${process.env.MONGODB_URI}/${DB_NAME_Farmer}`);
        console.log(`\Farmer Database connected!! `);

        // Optionally return connections if needed for further use
        return { connectionInstanceStocks, connectionInstanceCustomer,connectionInstanceFarmer};
        
    } catch (error) {
        console.log("MONGODB connection FAILED for one or more databases", error);
        process.exit(1);
    }
};

export default connectDB;
