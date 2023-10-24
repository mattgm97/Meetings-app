import { MongoClient } from 'mongodb';

const mongoDBConnector = async () => {
    const dbURL = process.env.MONGODB_URL

    try {
        const client = await MongoClient.connect(dbURL);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        return { meetupsCollection, client }
    } catch (error) {
        console.log("failed to connect with DB")
       return error
    }

}


export default mongoDBConnector;