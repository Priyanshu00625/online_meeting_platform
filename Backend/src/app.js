import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import connectToSocket  from "./controllers/SocketManner.js";
import userRoutes from "./routes/users.routes.js"

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit : "40kb", extended:true}));
app.use("/api/v1/users" , userRoutes);


const mongo_url = process.env.MONGO_URl;
const start = async () => {
  const connectionDb = await mongoose.connect(
    mongo_url
  );
  console.log(`MONGO Connected DB HOst : ${connectionDb.connection.host}`);
  
  server.listen(app.get("port"), () => {
    console.log("app start");
  });
};

start();
