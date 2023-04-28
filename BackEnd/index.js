const express = require("express");

const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const uri =
  "mongodb+srv://doctorPortal:fBy3mXbqk24OZLrY@cluster0.au8rgkx.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const appointmentOptions = client
      .db("doctorsPortal")
      .collection("appointmentOptions");
    const bookinCollection = client.db("doctorsPortal").collection("booking");

    app.get("/options", async (req, res) => {
      const date = req.query.date;
      console.log(req.query);
      const query = {};
      const options = await appointmentOptions.find(query).toArray();
      res.send(options);
    });

    app.post("/booking", async (req, res) => {
      const booking = req.body;
      const result = await bookinCollection.insertOne(booking);
      res.send(result);
    });
    // Send a ping to confirm a successful connection

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Doctor portal is Running");
});
app.listen(5000, (req, res) => [console.log("Server is Running")]);
