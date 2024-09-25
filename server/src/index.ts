// devrusith
// CMPI8mDcDoCjjmYW
// 40 mins

import express, {Express} from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://devrusith:CMPI8mDcDoCjjmYW@finance-tracker.ja8vl.mongodb.net/"

mongoose
.connect(mongoURI)
.then(() => console.log("MongoDB connection Successful!"))
.catch((err) => console.error("Failed to connect to MongoDB:", err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})