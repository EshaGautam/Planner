import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    const client = await MongoClient.connect('mongodb+srv://newuser-601:3PNfrwIn9I1LTMRQ@cluster0.vzfdbfs.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    // Accessing the meetups collection
    const taskCollection = db.collection('add-task');

    if (req.method === 'POST') {
        try {
            const data = req.body;
            const { title, image, status } = data;

            // Sending data to the database
            const result = await taskCollection.insertOne(data);
            client.close();

            // Sending a response to the client
            res.status(201).json({ message: 'Data is successfully inserted' });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: 'An error occurred while processing the request' });
        }
    }
};

export default handler;
