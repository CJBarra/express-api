import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js'

// TODO: CRUD setup for express app and routing

const app = express();
const PORT = 8000; // set new default port

// initialize bodyParser middleware for javascript object notation data
app.use(bodyParser.json());


// routing
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => {
  console.log(`...Server running on port http://localhost:${PORT}`);
});
