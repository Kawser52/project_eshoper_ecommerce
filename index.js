const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const userRoutes = require('./routes/userRoutes');
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()

// Database Connection
const uri = "mongodb+srv://DB_USER:DB_PASS@cluster0.2bfuy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("eshoper");
  if(collection){
    console.log('Database Connected')
  }
  client.close();
});

// End Database Connection 

// Start Route

app.use('/api', userRoutes);


// end Route

app.get('/', (req, res)=>{
    res.send('Server is running');
})

app.listen(port, ()=>{
    console.log(`Server is Runiing. ei port e dekho. ${port}`);
})
