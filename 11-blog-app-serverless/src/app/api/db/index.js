const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myDatabase';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect((err) => {
    if (err) {
        console.error('Failed to connect to the database:', err);
        return;
    }

    console.log('Connected successfully to the database');

    // Get the database instance
    const db = client.db(dbName);

    // Perform database operations here

    // Close the connection
    client.close();
});
