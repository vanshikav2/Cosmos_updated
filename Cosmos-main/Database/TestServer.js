const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt'); // Import bcrypt
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

app.use(cors()); // This allows requests from any origin

const uri = 'mongodb://localhost:27017';

const dbName = 'the_code_breakers';
const collectionName = 'main_db';

app.use(express.json());

app.use((req, res, next) => {
  const logMessage = `API Call: ${req.method} ${req.originalUrl}`;
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`${logMessage} - Body: ${JSON.stringify(req.body)}`);
  } else {
    console.log(logMessage);
  }
  next();
});

app.get('/GetData/:username', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const username = req.params.username;
    const user = await collection.findOne({ _id: username });

    if (user) {
      return res.json(user.data);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/CreateUser', async (req, res) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);  
        const { username, password, data } = req.body; // Assuming you send username, password, and data in the request body

        // Check if the user already exists
        const existingUser = await collection.findOne({ _id: username });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        // Hash the password
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = { _id: username, password: hashedPassword, data: data };

        const result = await collection.insertOne(newUser);
        res.status(201).json({ message: 'User created', userId: result.insertedId });

        await client.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/Login', async (req, res) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const { username, password } = req.body;
        const user = await collection.findOne({ _id: username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' }); // 401 Unauthorized
        }

        // Compare the entered password with the stored hash
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Successful login
            res.status(200).json({ message: 'Login successful', userId: user._id });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }

        await client.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT endpoint to update a user's data
app.put('/UpdateData/:username', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);  

    const username = req.params.username;
    const updatedData = req.body.data;

    const result = await collection.updateOne(
      { _id: username },
      { $set: updatedData }
    );

    if (result.modifiedCount === 1) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE endpoint to remove a user
app.delete('/DeleteData/:username', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);  

    const username = req.params.username;

    const result = await collection.updateOne(
      { _id: username },
      { $set: { data: null } }
    );

    if (result.modifiedCount === 1) {
      res.json({ message: 'User data deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/DeleteUser/:username', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const username = req.params.username;

    const existingUser = await collection.findOne({ _id: username });

    if (existingUser) {
      const result = await collection.deleteOne({ _id: username });
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }

    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Only start the server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
  });
}

// Export the app for testing purposes
module.exports = app;
